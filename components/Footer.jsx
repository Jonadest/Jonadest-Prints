// components/Footer.jsx
export default function Footer() {
    return (
        <footer className="border-t border-gray-dark py-12">
            <div className="max-w-7xl mx-auto px-4 flex justify-between">
                <span className="font-display font-bold">JONADEST PRINTS</span>

                <p className="text-sm text-gray-medium">
                    © {new Date().getFullYear()} Jonadest Prints
                </p>
            </div>
        </footer>
    );
}
