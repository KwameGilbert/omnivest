import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './../pages/homepage/Homepage';
import About from './../pages/about/About';
import Services from './../pages/services/Services';
import Packages from './../pages/packages/Packages';
import Contact from './../pages/contact/Contact';
import IntakeForm from './../pages/study-abroad/IntakeForm';
import PrivacyPolicy from './../pages/privacy-policy/PrivacyPolicy';
import FAQs from './../pages/faqs/FAQs';
import SuccessStories from './../pages/success-stories/SuccessStories';
import Booking from './../pages/booking/Booking';
import TestPage from '../pages/TestPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intake-form" element={<IntakeForm />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/test" element={<TestPage />} />
            {/* Add other routes here */}
        </Routes>
    );
};

export default AppRoutes;
