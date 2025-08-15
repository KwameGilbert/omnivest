import React from 'react';
import PackagesHero from '../../components/packages/PackagesHero';
import PackageCards from '../../components/packages/PackageCards';
import AddOnServices from '../../components/packages/AddOnServices';
import PackageComparison from '../../components/packages/PackageComparison';
import PackagesCTA from '../../components/packages/PackagesCTA';

const Packages = () => {

    return (
        <div className="min-h-screen bg-white">
            <PackagesHero />
            <PackageCards />
            <AddOnServices />
            <PackageComparison />
            <PackagesCTA />
        </div>
    );
};

export default Packages;
