import React from 'react';
import HeroSection from '../../components/services/HeroSection';
import ServicesSection from '../../components/services/ServicesSection';
import ProcessSection from '../../components/services/ProcessSection';
import CTASection from '../../components/common/CTASection';
import { coreServices } from '../../data/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
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
