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

// ✅ Domain
const baseUrl = 'https://jonadest-prints.vercel.app';

// ✅ OG Image (ImageKit CDN)
const ogImage = 'https://ik.imagekit.io/jonadest/print-og-image.jpg';

export const metadata = {
    title: 'Jonadest Prints | Premium Printing Services',
    description:
        'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more. Request a quote today!',

    metadataBase: new URL(baseUrl),

    openGraph: {
        title: 'Jonadest Prints | Premium Printing Services',
        description:
            'Premium quality printing services for your business. Business cards, flyers, large format, apparel, and more. Request a quote today!',
        url: baseUrl,
        siteName: 'Jonadest Prints',
        images: [
            {
                url: ogImage, // ✅ FULL URL (VERY IMPORTANT)
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Premium Printing Services',
                type: 'image/jpeg', // ✅ helps WhatsApp
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Prints | Premium Printing Services',
        description:
            'Premium quality printing services for your business. Business cards, flyers, large format, apparel, and more.',
        images: [ogImage], // ✅ FULL URL
        creator: '@jonadestprints',
    },

    alternates: {
        canonical: baseUrl,
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <head>
                {/* Theme */}
                <meta name="theme-color" content="#0a0a0a" />

                {/* PWA */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Jonadest Prints"
                />

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />
            </head>

            <body className="flex flex-col min-h-screen antialiased">
                <main className="flex-grow">{children}</main>
            </body>
        </html>
    );
}
