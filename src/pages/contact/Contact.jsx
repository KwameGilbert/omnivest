import React from 'react';
import SEO from '../../components/common/SEO';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

const Contact = () => {

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="Contact Us | Omnivest Educational Consult"
                description="Get in touch with Omnivest's education specialists for personalized guidance on your international education journey. We're here to answer your questions."
                keywords="contact omnivest, education consultancy contact, international education inquiry, study abroad consultation, education advisors, booking consultation, education assistance"
                canonical="https://omnivesteduconsult.co.uk/contact"
            />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default Contact;
