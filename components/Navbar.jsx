import Link from "next/link";

// components/Navbar.jsx
export default function Navbar({ onOpenModal }) {
    return (
        <nav className="border-b border-brand-gray-dark bg-brand-black/95 backdrop-blur-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-brand-white rounded-full"></div>
                        <span className="font-display font-bold text-2xl tracking-tight">
                            JONADEST
                        </span>
                        <span className="text-brand-gray-medium font-light text-sm tracking-widest ml-2">
                            PRINTS
                        </span>
                    </div>

                    <Link
                        href="/quote"
                        className="hidden md:block border-2 border-brand-white text-brand-white px-6 py-2.5 text-sm font-semibold tracking-wider uppercase hover:bg-brand-white hover:text-brand-black transition-all duration-300"
                    >
                        Get Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
