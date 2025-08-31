import React from 'react';
import SEO from '../../components/common/SEO';
import HeroSection from '../../components/services/HeroSection';
import ServicesSection from '../../components/services/ServicesSection';
import ProcessSection from '../../components/services/ProcessSection';
import CTASection from '../../components/common/CTASection';
import { coreServices } from '../../data/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Services"
        description="Explore Omnivest's comprehensive education services including university selection, application assistance, visa guidance, and ongoing student support."
        keywords="education services, university application support, study abroad services, visa assistance, student accommodation, pre-departure preparation, university selection"
        canonical="/services"
      />
      <HeroSection  
        title="Our"
        gradientText="Services"
        subtitle="Comprehensive support for every step of your international education journey."
      />
      
      <ServicesSection services={coreServices} />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Services;
