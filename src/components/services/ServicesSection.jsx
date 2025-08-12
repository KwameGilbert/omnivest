import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ServiceCard from './ServiceCard';

const ServicesSection = ({ services }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Core"
          highlightText="Services"
          description="Our comprehensive suite of services covers every aspect of your study abroad journey."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;