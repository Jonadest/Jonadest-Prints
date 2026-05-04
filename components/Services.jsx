import Image from 'next/image';
import services from '@/app/services';
import Link from 'next/link';

export default function Services() {
    return (
        <section
            id="services"
            className="relative border-t border-gray-dark py-24 overflow-hidden"
        >
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
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-0.5 bg-white mx-auto mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
                        Our Printing Services
                    </h2>
                    <p className="text-gray-medium max-w-2xl mx-auto text-lg drop-shadow-lg">
                        Professional printing solutions tailored to elevate your
                        brand
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col rounded-lg shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            {/* Square Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden rounded-t-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Card Content - Fixed Height */}
                            <div className="p-6 flex flex-col flex-grow backdrop-blur-sm relative z-10">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Get Quote Button - Always at Bottom */}
                                <Link
                                    href="/quote"
                                    className="relative z-20 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 btn-group mt-auto w-fit"
                                >
                                    Get Quote
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* Glass reflection effect - only on card, not clickable */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
