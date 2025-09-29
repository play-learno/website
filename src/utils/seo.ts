import type { Metadata } from 'next';

export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    twitterCard?: 'summary' | 'summary_large_image';
}

const DEFAULT_CONFIG = {
    siteName: 'Play Learno',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://playlearno.com',
    defaultTitle: 'Play Learno - Educational Books & Learning Adventures for Kids',
    defaultDescription: 'Thoughtfully crafted books and educational activities for children aged 2-6. Discover stories, interactive learning, and adventures designed with child development in mind.',
    defaultImage: '/images/play-learno-og.jpg',
    defaultKeywords: [
        'children books',
        'educational books',
        'kids learning',
        'early childhood education',
        'interactive books',
        'child development',
        'preschool learning',
        'ages 2-6',
        'learning adventures',
        'educational activities'
    ],
    locale: 'en_US',
    type: 'website' as const,
    twitterHandle: '@playlearno',
    facebookAppId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
};

export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description,
        keywords = DEFAULT_CONFIG.defaultKeywords,
        image = DEFAULT_CONFIG.defaultImage,
        url,
        type = 'website',
        publishedTime,
        modifiedTime,
        author,
        twitterCard = 'summary_large_image'
    } = config;

    const fullTitle = title.includes(DEFAULT_CONFIG.siteName)
        ? title
        : `${title} | ${DEFAULT_CONFIG.siteName}`;

    const canonicalUrl = url ? `${DEFAULT_CONFIG.siteUrl}${url}` : DEFAULT_CONFIG.siteUrl;
    const imageUrl = image.startsWith('http') ? image : `${DEFAULT_CONFIG.siteUrl}${image}`;

    const metadata: Metadata = {
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        authors: author ? [{ name: author }] : undefined,
        creator: DEFAULT_CONFIG.siteName,
        publisher: DEFAULT_CONFIG.siteName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(DEFAULT_CONFIG.siteUrl),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonicalUrl,
            siteName: DEFAULT_CONFIG.siteName,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: DEFAULT_CONFIG.locale,
            type,
            publishedTime,
            modifiedTime,
        },
        twitter: {
            card: twitterCard,
            title: fullTitle,
            description,
            images: [imageUrl],
            creator: DEFAULT_CONFIG.twitterHandle,
            site: DEFAULT_CONFIG.twitterHandle,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
        },
    };

    return metadata;
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'ComingSoon' = 'Organization') {
    const baseStructuredData = {
        '@context': 'https://schema.org',
    };

    switch (type) {
        case 'Organization':
            return {
                ...baseStructuredData,
                '@type': 'Organization',
                name: DEFAULT_CONFIG.siteName,
                description: DEFAULT_CONFIG.defaultDescription,
                url: DEFAULT_CONFIG.siteUrl,
                logo: `${DEFAULT_CONFIG.siteUrl}/images/logo.png`,
                sameAs: [
                    'https://facebook.com/playlearno',
                    'https://twitter.com/playlearno',
                    'https://instagram.com/playlearno',
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Service',
                    email: 'hello@playlearno.com',
                },
                foundingDate: '2024',
                industry: 'Educational Publishing',
                audience: {
                    '@type': 'Audience',
                    audienceType: 'Children aged 2-6 and their parents',
                },
            };

        case 'WebSite':
            return {
                ...baseStructuredData,
                '@type': 'WebSite',
                name: DEFAULT_CONFIG.siteName,
                url: DEFAULT_CONFIG.siteUrl,
                description: DEFAULT_CONFIG.defaultDescription,
                publisher: {
                    '@type': 'Organization',
                    name: DEFAULT_CONFIG.siteName,
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${DEFAULT_CONFIG.siteUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            };

        case 'ComingSoon':
            return {
                ...baseStructuredData,
                '@type': 'Product',
                name: 'Play Learno Educational Books',
                description: 'Educational books and learning adventures for children aged 2-6',
                category: 'Educational Materials',
                audience: {
                    '@type': 'Audience',
                    audienceType: 'Children',
                    suggestedMinAge: 2,
                    suggestedMaxAge: 6,
                },
                manufacturer: {
                    '@type': 'Organization',
                    name: DEFAULT_CONFIG.siteName,
                },
                offers: {
                    '@type': 'Offer',
                    availability: 'https://schema.org/ComingSoon',
                    price: '0',
                    priceCurrency: 'USD',
                },
            };

        default:
            return baseStructuredData;
    }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${DEFAULT_CONFIG.siteUrl}${item.url}`,
        })),
    };
}

export const DEFAULT_SEO_CONFIG: SEOConfig = {
    title: DEFAULT_CONFIG.defaultTitle,
    description: DEFAULT_CONFIG.defaultDescription,
    keywords: DEFAULT_CONFIG.defaultKeywords,
    image: DEFAULT_CONFIG.defaultImage,
    type: 'website',
};

// Core Web Vitals tracking helpers
interface WebVitalMetric {
    name: string;
    value: number;
    delta: number;
    id: string;
}

export const trackWebVitals = () => {
    if (typeof window !== 'undefined') {
        // This will be used with web-vitals library if needed
        return {
            onCLS: (metric: WebVitalMetric) => console.log('CLS:', metric),
            onFID: (metric: WebVitalMetric) => console.log('FID:', metric),
            onFCP: (metric: WebVitalMetric) => console.log('FCP:', metric),
            onLCP: (metric: WebVitalMetric) => console.log('LCP:', metric),
            onTTFB: (metric: WebVitalMetric) => console.log('TTFB:', metric),
        };
    }
    return null;
};