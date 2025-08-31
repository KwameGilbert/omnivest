import React from 'react';
import SEO from '../../components/common/SEO';
import AboutHero from '../../components/about/AboutHero';
import VisionMission from '../../components/about/VisionMission';
import ValuesSection from '../../components/about/ValuesSection';
import StatsSection from '../../components/about/StatsSection';
import AboutCTA from '../../components/about/AboutCTA';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <SEO 
                title="About Our Mission and Values"
                description="Learn about Omnivest Educational Consult's journey, mission, values, and our dedicated team helping students achieve their international education goals."
                keywords="about omnivest, education consultancy, international education experts, study abroad specialists, education mission statement, omnivest team, education consultants"
                canonical="/about"
            />
            <AboutHero />
            <VisionMission />
            <ValuesSection />
            <StatsSection />
            <AboutCTA />
        </div>
    );
};

export default About;
