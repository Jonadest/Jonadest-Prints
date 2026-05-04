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

// ✅ Domain - Replace with your actual domain
const baseUrl = 'https://jonadest-prints.vercel.app/';

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
                url: '/og-image.jpg', // ✅ stored in public/
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Custom T-Shirt Printing',
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
        creator: '@jonadestprints', // Optional: your Twitter handle
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
                <link rel="apple-touch-icon" href="/icon-192x192.png" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest for PWA (optional) */}
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="flex flex-col min-h-screen antialiased">
                {/* Header/Navigation can go here */}

                <main className="flex-grow relative z-0">{children}</main>

                {/* Footer can go here */}
            </body>
        </html>
    );
}
