import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './../pages/homepage/Homepage';
import About from './../pages/about/About';
import Services from './../pages/services/Services';
import Packages from './../pages/packages/Packages';
import Contact from './../pages/contact/Contact';
import TestPage from '../pages/TestPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<TestPage />} />
            {/* Add other routes here */}
        </Routes>
    );
};

export default AppRoutes;
