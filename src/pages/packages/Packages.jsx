import React from 'react';
import SEO from '../../components/common/SEO';
import PackagesHero from '../../components/packages/PackagesHero';
import PackageCards from '../../components/packages/PackageCards';
import AddOnServices from '../../components/packages/AddOnServices';
import PackageComparison from '../../components/packages/PackageComparison';
import PackagesCTA from '../../components/packages/PackagesCTA';

const Packages = () => {

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="Service Packages | Omnivest Educational Consult"
                description="Choose from Omnivest's range of specialized service packages designed to suit different education needs and budgets for your international study journey."
                keywords="education packages, university application packages, study abroad packages, education consulting services, premium education services, standard education package, comprehensive education support, UK visa packages, USA visa packages, Canada visa packages, study and work abroad, scholarship application packages, IELTS preparation packages, British Council, IDP, Globe Educational services"
                canonical="/packages"
            />
            <PackagesHero />
            <PackageCards />
            <AddOnServices />
            <PackageComparison />
            <PackagesCTA />
        </div>
    );
};

export default Packages;
