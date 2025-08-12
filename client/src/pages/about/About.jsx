import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import VisionMission from '../../components/about/VisionMission';
import ValuesSection from '../../components/about/ValuesSection';
import StatsSection from '../../components/about/StatsSection';
import AboutCTA from '../../components/about/AboutCTA';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <AboutHero />
            <VisionMission />
            <ValuesSection />
            <StatsSection />
            <AboutCTA />
        </div>
    );
};

export default About;
