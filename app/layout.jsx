// app/layout.jsx

import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

// ✅ Fonts
const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-montserrat',
    display: 'swap',
});

// ✅ Domain - Remove trailing slash
const baseUrl = 'https://jonadest-prints.vercel.app';

export const metadata = {
    title: 'Jonadest Prints | Premium Printing Services',
    description:
        'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more. Request a quote today!',
    keywords: [
        'Jonadest Prints',
        'printing services',
        'business cards',
        'flyers printing',
        'large format printing',
        'custom apparel printing',
        'stickers and labels',
        'booklets printing',
        'packaging design',
        'banners printing',
        'printing company',
        'commercial printing',
    ],
    authors: [{ name: 'Jonadest Prints' }],
    creator: 'Jonadest Prints',
    publisher: 'Jonadest Prints',
    metadataBase: new URL(baseUrl),
    openGraph: {
        title: 'Jonadest Prints | Premium Printing Services',
        description:
            'Premium quality printing services for your business. Business cards, flyers, large format, apparel, and more. Request a quote today!',
        url: baseUrl,
        siteName: 'Jonadest Prints',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Premium Printing Services',
            },
            // Add a square image specifically for WhatsApp
            {
                url: '/og-image-square.jpg', // Square version for WhatsApp
                width: 600,
                height: 600,
                alt: 'Jonadest Prints - Premium Printing Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Prints | Premium Printing Services',
        description:
            'Premium quality printing services for your business. Business cards, flyers, large format, apparel, and more. Request a quote today!',
        images: ['/og-image.jpg'],
        creator: '@jonadestprints',
    },
    alternates: {
        canonical: baseUrl,
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <head>
                {/* Theme color for browser UI */}
                <meta name="theme-color" content="#0a0a0a" />

                {/* PWA / Mobile Web App */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Jonadest Prints"
                />

                {/* Favicon - Multiple sizes */}
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/icon-512x512.png"
                />

                {/* Manifest for PWA */}
                <link rel="manifest" href="/manifest.json" />

                {/* Force WhatsApp to use og:image instead of favicon */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />

                {/* Additional meta for WhatsApp */}
                <meta
                    property="og:image:alt"
                    content="Jonadest Prints - Premium Printing Services"
                />
            </head>
            <body className="flex flex-col min-h-screen antialiased">
                <main className="flex-grow relative z-0">{children}</main>
            </body>
        </html>
    );
}
