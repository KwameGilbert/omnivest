import React from 'react';
import HeroBanner from './../../components/homepage/HeroBanner';
import BriefAbout from './../../components/homepage/BriefAbout';
import WhyStudyAbroad from './../../components/homepage/WhyStudyAbroad';
import ServicesPreview from './../../components/homepage/ServicesPreview';
import PopularDestinations from './../../components/homepage/PopularDestinations';
import PackagesTeaser from './../../components/homepage/PackagesTeaser';
import AddOnServices from './../../components/homepage/AddOnServices';
import TestimonialCarousel from './../../components/homepage/TestimonialCarousel';
import FAQSection from './../../components/homepage/FAQSection';
import ContactPopup from './../../components/homepage/ContactPopup';
import CallToAction from './../../components/homepage/CallToAction';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroBanner />
            <BriefAbout />
            <ServicesPreview />
            <WhyStudyAbroad />
            {/* <PopularDestinations /> */}
            {/* <PackagesTeaser /> */}
            {/* <AddOnServices /> */}
            <TestimonialCarousel />
            <FAQSection />
            {/* <CallToAction /> */}
            <ContactPopup />
        </div>
    );
};

export default Homepage;