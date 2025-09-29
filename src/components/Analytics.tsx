"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Analytics tracking ID - set via environment variable
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Google Analytics gtag helper
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void;
  }
}

export function gtag(command: string, targetId: string, config?: object) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(command, targetId, config);
  }
}

// Track page views
export function pageview(url: string) {
  if (GA_TRACKING_ID) {
    gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
}

// Track custom events
export function event(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (GA_TRACKING_ID) {
    gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export default function Analytics() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Simple performance tracking
      const trackCoreWebVitals = () => {
        // Track page load time
        window.addEventListener("load", () => {
          const loadTime =
            performance.timing.loadEventEnd -
            performance.timing.navigationStart;
          event("page_load_time", "performance", "load_time", loadTime);
        });
      };

      trackCoreWebVitals();
    }
  }, []);

  // Don't render analytics in development
  if (process.env.NODE_ENV !== "production" || !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'coming_soon_page'
              }
            });

            // Enhanced ecommerce for email signups
            gtag('config', '${GA_TRACKING_ID}', {
              custom_map: {'custom_parameter_1': 'email_signup_funnel'}
            });
          `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            ${
              process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
                ? `
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `
                : ""
            }
          `,
        }}
      />

      {/* Microsoft Clarity */}
      {process.env.NEXT_PUBLIC_CLARITY_ID && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      )}
    </>
  );
}
