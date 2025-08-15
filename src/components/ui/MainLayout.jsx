import React from 'react';
// import { Analytics } from "@vercel/analytics/next"
import Navbar from '../layout/Navbar';
import WhatsAppButton from '../layout/WhatsAppButton';
import Footer from '../layout/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800 overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default MainLayout;