import React from 'react';
import SEO from '../../components/common/SEO';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <SEO
        title="Privacy Policy | Omnivest Educational Consult"
        description="Read Omnivest Educational Consult's privacy policy to understand how we collect, use, and protect your personal information when using our services."
        keywords="privacy policy, data protection, student privacy, education consultancy privacy, GDPR compliance, data security, information protection"
        canonical="https://omnivesteduconsult.co.uk/privacy-policy"
      />
      <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          This Privacy Policy explains how Omnivest ("we", "our", or "us") collects, uses, discloses, and protects the personal information you provide when using our website and services. By using our site or submitting information through our forms, you agree to the terms described below.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Contact details: name, email address, phone number.</li>
            <li>Application / intake data: education level, preferred country, program/course, study level, test scores, funding and budget details, intake timeframe, and additional notes you provide.</li>
            <li>Usage data: IP address, browser type, pages visited, and interaction logs collected automatically when you visit the site.</li>
            <li>Cookies and similar technologies: identifiers used to enable site functionality and analytics.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Collect Information</h2>
          <p className="text-gray-600">
            We collect information you provide directly when you fill out forms (such as intake forms, contact forms, or quote requests). We also collect certain information automatically through server logs, cookies, and analytics tools when you visit or use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use personal information for purposes including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>To respond to inquiries, process applications, and provide services you request.</li>
            <li>To communicate about your application, appointments, and important updates.</li>
            <li>To personalize and improve the website, services, and user experience.</li>
            <li>To analyze usage trends, perform analytics, and monitor and prevent fraud or abuse.</li>
            <li>To comply with legal obligations and enforce our terms of service.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-2">
            We will not sell your personal information. We may share information in the following limited circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>With service providers and partners who help deliver our services (e.g., email providers, analytics, payment processors) under contract and only as necessary.</li>
            <li>When required by law, legal process, or to protect rights, property or safety.</li>
            <li>In connection with a business transaction such as a merger, acquisition, or sale of assets (with notice to you where required by law).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Cookies & Tracking</h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies to operate and improve our site, remember preferences, and provide analytics. You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Third-Party Services</h2>
          <p className="text-gray-600">
            We may use third-party services (such as analytics and email providers). These third parties have their own privacy policies and may collect data as described in their terms. We recommend reviewing their policies if you have concerns.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Data Security</h2>
          <p className="text-gray-600">
            We implement reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no transmission over the internet or electronic storage method is completely secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Data Retention</h2>
          <p className="text-gray-600">
            We retain personal information for as long as necessary to provide services, meet legal obligations, resolve disputes, and enforce agreements. Retention periods may vary depending on the type of data and purpose of collection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Your Rights</h2>
          <p className="text-gray-600 mb-2">
            Depending on your jurisdiction, you may have rights related to your personal information, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Accessing the personal data we hold about you.</li>
            <li>Requesting correction or deletion of inaccurate or unnecessary data.</li>
            <li>Objecting to or restricting certain processing activities.</li>
            <li>Requesting a copy of your data in a common machine-readable format.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            To exercise these rights or make a privacy-related request, please contact us at the address below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">10. Children's Privacy</h2>
          <p className="text-gray-600">
            Our services are not intended for children under 16 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, contact us and we will take steps to delete the information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">11. International Transfers</h2>
          <p className="text-gray-600">
            Personal information may be processed and stored in countries other than your country of residence. When transferring data internationally, we implement safeguards required by applicable law (for example, standard contractual clauses) when appropriate.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">12. Updates to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. When changes are significant, we will make reasonable efforts to provide notice (for example, via a prominent announcement on the website). The "last updated" date below reflects the most recent revision.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">13. Contact Us</h2>
          <p className="text-gray-600 mb-2">
            If you have questions, requests, or concerns about this policy or our data practices, contact us:
          </p>
          <ul className="list-none text-gray-600">
            <li>Email: <a className="text-orange-500 underline" href="mailto:info@omnivesteduconsult.co.uk">info@omnivesteduconsult.co.uk</a></li>
            <li>Contact form: <Link className="text-orange-500 underline" to="/contact">/contact</Link></li>
            <li>Intake form: <Link className="text-orange-500 underline" to="/study-abroad/intakeform">/study-abroad/intakeform</Link></li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-6">
          Last updated: August 16, 2025
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
