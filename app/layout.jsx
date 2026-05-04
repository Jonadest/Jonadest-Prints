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
    title: 'Jonadest Prints - Premium Printing Services',
    description:
        'Get premium quality printing services for your business. Business cards, flyers, large format printing and more. Request a quote today!',

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
