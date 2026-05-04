import './globals.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

const baseUrl = 'https://jonadestprints.com'; // ✅ IMPORTANT

export const metadata = {
    title: 'Jonadest Prints - Premium Printing Services',
    description:
        'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more. Request a quote today!',

    metadataBase: new URL(baseUrl),

    openGraph: {
        title: 'Jonadest Prints - Premium Printing Services',
        description:
            'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more.',
        url: baseUrl,
        siteName: 'Jonadest Prints',
        images: [
            {
                url: `${baseUrl}/og-image.jpg`, // ✅ MUST be absolute
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Premium Printing Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Prints - Premium Printing Services',
        description:
            'Get premium quality printing services for your business. Business cards, flyers, large format printing and more.',
        images: [`${baseUrl}/og-image.jpg`], // ✅ absolute URL
        creator: '@jonadestprints',
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

    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: 1,
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
