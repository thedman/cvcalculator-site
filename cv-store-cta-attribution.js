(function () {
  var STORE_HOSTS = /(?:apps\.apple\.com|play\.google\.com)$/i;
  var PAGE_METADATA = {
    "/": ["homepage", "homepage", "homepage", "commuted_value"],
    "/app-walkthrough": ["walkthrough", "app_walkthrough", "calculator_utility", "commuted_value"],
    "/commuted-value-age-55-deadline-canada": ["article", "commuted_value_age_55_deadline_canada", "pension_guide", "commuted_value"],
    "/commuted-value-calculator-canada": ["article", "commuted_value_calculator_canada", "calculator_utility", "commuted_value"],
    "/commuted-value-lira-transfer-limit-explained": ["article", "commuted_value_lira_transfer_limit_explained", "pension_guide", "commuted_value"],
    "/commuted-value-taxes-canada": ["article", "commuted_value_taxes_canada", "pension_guide", "commuted_value"],
    "/deferred-pension-vs-commuted-value-canada": ["article", "deferred_pension_vs_commuted_value_canada", "pension_guide", "commuted_value"],
    "/federal-public-service-pension-transfer-value": ["article", "federal_public_service_pension_transfer_value", "pension_guide", "federal"],
    "/hoopp-commuted-value": ["article", "hoopp_commuted_value", "pension_guide", "hoopp"],
    "/how-cia-3500-interest-rates-affect-commuted-value": ["article", "how_cia_3500_interest_rates_affect_commuted_value", "pension_guide", "commuted_value"],
    "/omers-commuted-value": ["article", "omers_commuted_value", "pension_guide", "omers"],
    "/ontario-teachers-commuted-value": ["article", "ontario_teachers_commuted_value", "pension_guide", "otpp"],
    "/should-i-take-my-commuted-value": ["article", "should_i_take_my_commuted_value", "pension_guide", "commuted_value"],
    "/what-happens-to-db-pension-when-you-leave-employer-canada": ["article", "what_happens_to_db_pension_when_you_leave_employer_canada", "pension_guide", "commuted_value"]
  };

  function cleanPath(pathname) {
    if (!pathname || pathname === "/index.html") return "/";
    return pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "") || "/";
  }

  function snake(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "unknown";
  }

  function pageMetadata() {
    var path = cleanPath(window.location.pathname);
    var data = PAGE_METADATA[path] || ["other", snake(path.replace(/^\//, "") || "unknown"), "sitewide", "other"];
    return {
      page_type: data[0],
      content_id: data[1],
      content_category: data[2],
      topic_cluster: data[3]
    };
  }

  function targetFor(url) {
    if (/play\.google\.com$/i.test(url.hostname)) {
      var packageName = url.searchParams.get("id");
      if (packageName !== "com.dmccrory.cv_calculator" && packageName !== "com.renewaliq.renewal_iq") return null;
      return {
        property_id: packageName === "com.renewaliq.renewal_iq" ? "renewaliq" : "cvcalculator",
        destination_type: "google_play",
        destination_platform: "android"
      };
    }
    if (!/6759869222|6766287238|cvcalculator|renewaliq/i.test(url.pathname)) return null;
    return {
      property_id: /renewaliq/i.test(url.pathname) || /6766287238/.test(url.pathname) ? "renewaliq" : "cvcalculator",
      destination_type: "app_store_ios",
      destination_platform: "ios"
    };
  }

  function entryPoint(el) {
    var existing = el.getAttribute("data-ga-entry_point") || el.getAttribute("data-ga-location");
    if (existing) return snake(existing);
    if (el.closest("footer")) return "footer";
    if (el.closest(".hero, .hero-cta")) return "hero";
    if (el.closest(".cta-box")) return "article_cta";
    if (el.closest(".crosspromo, .crosspromo-card")) return "crosspromo";
    return pageMetadata().page_type === "homepage" ? "download_section" : "article_cta";
  }

  function ctaId(el, target, entry) {
    var existing = el.getAttribute("data-ga-cta_id");
    if (existing) return snake(existing.replace(/android_interest/g, "android_download"));
    return [entry, target.destination_platform, "download"].map(snake).join("_");
  }

  function storeCampaignId(target, meta, entry) {
    return [target.property_id, meta.content_id, target.destination_platform, entry].map(snake).join("_");
  }

  function storeLinkFromEvent(event) {
    var el = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!el) return null;
    try {
      var url = new URL(el.href);
      return STORE_HOSTS.test(url.hostname) ? { el: el, url: url } : null;
    } catch (_) {
      return null;
    }
  }

  document.addEventListener("click", function (event) {
    var link = storeLinkFromEvent(event);
    if (!link || typeof window.gtag !== "function") return;

    var meta = pageMetadata();
    var target = targetFor(link.url);
    if (!target) return;
    var entry = entryPoint(link.el);
    var params = {
      event_category: "engagement",
      property_id: target.property_id,
      page_type: meta.page_type,
      content_id: meta.content_id,
      content_category: meta.content_category,
      topic_cluster: meta.topic_cluster,
      cta_id: ctaId(link.el, target, entry),
      entry_point: entry,
      destination_type: target.destination_type,
      destination_platform: target.destination_platform,
      store_campaign_id: storeCampaignId(target, meta, entry),
      page_path: cleanPath(window.location.pathname)
    };

    window.gtag("event", "cta_clicked", params);
    event.stopPropagation();
  }, true);
})();
