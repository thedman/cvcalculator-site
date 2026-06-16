/**
 * CVCalculator email lead capture.
 *
 * Posts subscriber emails to the Shared Product Lead Registry Worker, shows a
 * confirmed success state only after a successful write, surfaces a real error
 * state on failure, and fires the standardized GA4 event `email_signup_completed`
 * only after a confirmed Worker response.
 *
 * Replaces the legacy Google Form flow (hidden-iframe POST + timer-based "success").
 *
 * Markup contract (set on each <form data-lead-capture>):
 *   data-cta-location   slug-like CTA identifier (Worker validates [a-z0-9][a-z0-9_-]{0,79})
 *   data-page-type      homepage | article
 *   data-cta-id         stable CTA id for GA4
 *   data-entry-point    surface grouping for GA4
 *   data-success-target id of the element to reveal on success
 *   data-error-target   id of the element to show error text in
 * The form must contain one input[type="email"] and one submit button.
 */
(function () {
  'use strict';

  var WORKER_ENDPOINT = 'https://shared-lead-registry-worker.dmccrory.workers.dev/lead';
  var SOURCE_SITE = 'cvcalculator.ca';
  var PRODUCT_INTEREST = 'cvcalculator';

  function byId(id) {
    return id ? document.getElementById(id) : null;
  }

  function withContext(payload) {
    try {
      var params = new URLSearchParams(window.location.search);
      ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (key) {
        var value = params.get(key);
        if (value) payload[key] = value;
      });
    } catch (e) {
      /* URLSearchParams unsupported: skip UTM enrichment, non-fatal */
    }
    if (document.referrer) payload.referrer = document.referrer;
    return payload;
  }

  function bindForm(form) {
    var successEl = byId(form.getAttribute('data-success-target'));
    var errorEl = byId(form.getAttribute('data-error-target'));
    var emailInput = form.querySelector('input[type="email"]');
    var submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }

      var email = ((emailInput && emailInput.value) || '').trim();
      if (!email) {
        if (errorEl) {
          errorEl.textContent = 'Please enter your email address.';
          errorEl.style.display = 'block';
        }
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      var ctaLocation = form.getAttribute('data-cta-location') || 'cvcalculator_email_capture';
      var pageType = form.getAttribute('data-page-type') || 'unknown';
      var ctaId = form.getAttribute('data-cta-id') || ctaLocation;
      var entryPoint = form.getAttribute('data-entry-point') || 'email_capture';

      var payload = withContext({
        email: email,
        source_site: SOURCE_SITE,
        source_page: window.location.pathname || '/',
        cta_location: ctaLocation,
        product_interest: PRODUCT_INTEREST
      });

      fetch(WORKER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().catch(function () { return null; }).then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok && result.data && result.data.success === true) {
            form.style.display = 'none';
            if (successEl) successEl.style.display = 'block';
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'email_signup_completed', {
                property_id: PRODUCT_INTEREST,
                page_type: pageType,
                cta_location: ctaLocation,
                cta_id: ctaId,
                entry_point: entryPoint
              });
            }
          } else {
            var message = (result.data && result.data.error)
              ? result.data.error
              : 'Something went wrong. Please try again.';
            if (errorEl) {
              errorEl.textContent = message;
              errorEl.style.display = 'block';
            }
            if (submitBtn) submitBtn.disabled = false;
          }
        })
        .catch(function () {
          if (errorEl) {
            errorEl.textContent = 'Network error. Please check your connection and try again.';
            errorEl.style.display = 'block';
          }
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  function init() {
    var forms = document.querySelectorAll('form[data-lead-capture]');
    for (var i = 0; i < forms.length; i++) bindForm(forms[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
