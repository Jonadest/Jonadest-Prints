import Link from "next/link";

// components/Services.jsx
const services = [
    { icon: '🃏', title: 'Business Cards', description: 'Premium cards.' },
    {
        icon: '📄',
        title: 'Flyers & Brochures',
        description: 'Marketing prints.',
    },
    {
        icon: '📚',
        title: 'Booklets & Catalogs',
        description: 'Professional docs.',
    },
    { icon: '🏷️', title: 'Stickers & Labels', description: 'Custom branding.' },
    { icon: '🎨', title: 'Large Format', description: 'Banners & posters.' },
    { icon: '📦', title: 'Packaging', description: 'Custom packaging.' },
];

export default function Services({ onOpenModal }) {
    return (
        <section
            id="services"
            className="border-t border-brand-gray-dark py-24"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-display text-center mb-12">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="border p-6 bg-brand-black">
                            <div className="text-3xl">{service.icon}</div>
                            <h3 className="text-xl mt-4">{service.title}</h3>
                            <p className="text-brand-gray-medium mt-2">
                                {service.description}
                            </p>

                            <Link
                                href="/quote"
                                className="mt-4 text-sm bg-gray-700 text-white py-1 px-2"
                            >
                                Get Quote →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
