import Link from 'next/link';

export default function QuoteSuccessPage() {
    return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
            <div className="text-center">
                <div className="text-6xl mb-6">✓</div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                    Quote Request Received!
                </h1>
                <p className="text-brand-gray-medium text-lg mb-4">
                    Thank you for your interest in Jonadest Prints.
                </p>
                <p className="text-brand-gray-medium mb-8">
                    We'll review your request and get back to you within 24
                    hours.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        href="/"
                        className="inline-block bg-brand-white text-brand-black px-8 py-3 font-semibold hover:bg-brand-gray-light transition-colors"
                    >
                        Return to Home
                    </Link>
                    <Link
                        href="/services"
                        className="inline-block border-2 border-brand-white text-brand-white px-8 py-3 font-semibold hover:bg-brand-white hover:text-brand-black transition-colors"
                    >
                        View Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
}
