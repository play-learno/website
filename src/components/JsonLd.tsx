"use client";

import { generateStructuredData } from "@/utils/seo";
import Script from "next/script";

export default function JsonLd() {
  const organizationData = generateStructuredData("Organization");
  const websiteData = generateStructuredData("WebSite");
  const comingSoonData = generateStructuredData("ComingSoon");

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="coming-soon-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(comingSoonData),
        }}
      />
    </>
  );
}
