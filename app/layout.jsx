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

export const metadata = {
    // Basic Meta Tags
    title: 'Jonadest Prints - Premium Printing Services',
    description:
        'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more. Request a quote today!',

    // Canonical URL
    metadataBase: new URL('https://jonadestprints.com'), // Replace with your actual domain

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        title: 'Jonadest Prints - Premium Printing Services',
        description:
            'Get premium quality printing services for your business. Business cards, flyers, large format printing, apparel, stickers and more. Request a quote today!',
        url: 'https://jonadestprints.com', // Replace with your actual domain
        siteName: 'Jonadest Prints',
        images: [
            {
                url: '/tshirts.jpg', // Your image path in public folder
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Custom T-Shirt Printing',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Prints - Premium Printing Services',
        description:
            'Get premium quality printing services for your business. Business cards, flyers, large format printing and more. Request a quote today!',
        images: [
            {
                url: '/og-image.png', // This will use the generated image
                width: 1200,
                height: 630,
                alt: 'Jonadest Prints - Premium Printing Services',
            },
        ], // Your image path
        creator: '@jonadestprints', // Optional: your Twitter handle
    },

    // Additional Meta Tags
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

    // Verification (optional - add when you set these up)
    // verification: {
    //     google: 'your-google-verification-code',
    // },

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
