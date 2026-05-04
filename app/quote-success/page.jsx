import Link from 'next/link';

export default function QuoteSuccessPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">
            {/* Background Image with Glass Effect */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: "url('/services.jpg')",
                    }}
                ></div>
                {/* Multiple layers for frosted glass effect */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Success Card with Glass Effect */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-12 shadow-2xl">
                    {/* Success Icon */}
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
                        Quote Request Received!
                    </h1>

                    {/* Message */}
                    <p className="text-gray-300 text-lg mb-4 drop-shadow-lg">
                        Thank you for your interest in Jonadest Prints.
                    </p>
                    <p className="text-gray-400 mb-8 drop-shadow-lg">
                        We'll review your request and get back to you within 24
                        hours.
                    </p>

                    {/* Decorative Divider */}
                    <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8"></div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                        >
                            Return to Home
                        </Link>
                        <Link
                            href="/services"
                            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-gray-400 text-sm">
                    <p className="drop-shadow-md">
                        Have questions? Contact us at{' '}
                        <a
                            href="mailto:info@jonadestprints.com"
                            className="text-white hover:text-gray-300 transition-colors underline underline-offset-2"
                        >
                            info@jonadestprints.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
