import Link from "next/link";

// components/Hero.jsx
export default function Hero({ onOpenModal }) {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero2.jpg')" }}
                />

                {/* Better overlay */}
                {/*  <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div> */}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="max-w-3xl">
                    <div className="w-16 h-0.5 bg-white mb-8"></div>

                    <h1 className="font-display text-5xl lg:text-7xl font-bold mb-8">
                        Premium Printing
                        <br />
                        <span className="text-gray-medium font-light">
                            For Your Business
                        </span>
                    </h1>

                    <p className="text-lg text-gray-medium mb-12 max-w-2xl">
                        From business cards to large format banners, we deliver
                        exceptional quality prints that make your brand stand
                        out.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link
                            href="/quote"
                            className="inline-block bg-white text-black px-2 py-2 md:px-6 md:py-3 uppercase font-semibold hover:bg-gray-light transition-colors"
                        >
                            Request a Quote
                        </Link>

                        <a
                            href="#services"
                            className="border-2 border-white px-2 py-2 md:px-6 md:py-3 uppercase"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
