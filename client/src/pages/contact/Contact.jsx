import React from 'react';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

const Contact = () => {

    return (
        <div className="min-h-screen bg-white">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default Contact;
