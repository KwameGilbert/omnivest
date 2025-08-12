import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  const processSteps = [
    { step: "01", title: "Initial Consultation", description: "We start with a comprehensive consultation to understand your goals, preferences, and background." },
    { step: "02", title: "Personalized Planning", description: "Based on your profile, we create a customized roadmap for your study abroad journey." },
    { step: "03", title: "Application Process", description: "We guide you through university selection, application preparation, and submission." },
    { step: "04", title: "Visa Support", description: "Complete visa application support including documentation and interview preparation." },
    { step: "05", title: "Pre-Departure", description: "Comprehensive preparation including accommodation, flights, and cultural orientation." },
    { step: "06", title: "Ongoing Support", description: "Continued support even after you reach your destination to ensure smooth settling." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="How We"
          highlightText="Work"
          description="Our proven process ensures you get the best support at every step."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((item, index) => (
              <ProcessStep key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;