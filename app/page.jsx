'use client';


import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
    

    return (
        <div className="min-h-screen bg-brand-black text-brand-white">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Services onOpenModal={() => setIsModalOpen(true)} />
            <Footer />

            
        </div>
    );
}
