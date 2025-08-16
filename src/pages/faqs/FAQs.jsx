import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'What services does Omnivest provide?',
    a: 'We provide end-to-end study abroad support including university selection, application assistance, visa guidance, scholarship searches, pre-departure briefings, and post-arrival support.'
  },
  {
    q: 'How do I get started?',
    a: (
      <>
        Start by completing our <Link to="/intake-form" className="text-orange-500 underline">Study Abroad Intake Form</Link>. Our advisors will review your details and get in touch for a free consultation.
      </>
    )
  },
  {
    q: 'Is there a fee for the initial consultation?',
    a: 'No. Initial consultations are free. We may charge for specific paid services such as document review, test preparation, or application package preparation — details will be shared up front.'
  },
  {
    q: 'How long does the application process take?',
    a: 'Timelines vary by country, university and program. Typically, you should allow 2–6 months for application preparation and submission, plus additional time for visa processing. We will provide an estimated timeline after reviewing your profile.'
  },
  {
    q: 'Do you help with scholarships and funding?',
    a: 'Yes. We identify scholarship opportunities and provide guidance on scholarship applications. We also advise on budgeting and funding options.'
  },
  {
    q: 'Can Omnivest help with visa applications?',
    a: 'Yes. We help prepare visa documentation, review forms, and provide guidance on interview preparation where applicable.'
  },
  {
    q: 'What information do you collect when I submit the intake form?',
    a: (
      <>
        We collect contact and education details required to advise you properly. You can read more about how we handle your data on our <Link to="/privacy-policy" className="text-orange-500 underline">Privacy Policy</Link>.
      </>
    )
  },
  {
    q: 'Who can I contact for more help?',
    a: (
      <>
        Email us at <a href="mailto:info@omnivest.com" className="text-orange-500 underline">info@omnivest.com</a> or use the contact form on our <Link to="/contact" className="text-orange-500 underline">Contact</Link> page.
      </>
    )
  }
  ,
  {
    q: 'Which countries do you support?',
    a: 'We support USA, Canada, UK, Australia, New Zealand, Germany, Ireland, Netherlands, and many other popular study destinations worldwide.'
  },
  {
    q: 'Do you help with course and country selection?',
    a: 'Yes! We provide personalized counseling to help you choose the right course and country based on your academic background, career goals, and preferences.'
  },
  {
    q: 'Are your services paid?',
    a: 'No, our services are not paid. We\'re committed to making education abroad accessible to everyone.'
  },
  {
    q: 'What visa support do you provide?',
    a: 'We provide comprehensive visa support including document preparation, application submission, interview coaching, and follow-up until visa approval.'
  },
  {
    q: 'Do you provide essay and SOP writing help?',
    a: 'Yes! We offer both editing services for your drafts and complete writing support for SOPs and essays as part of our packages.'
  },
  {
    q: 'Do you help with accommodation and flights?',
    a: 'Yes, accommodation assistance and flight booking support are included in our Standard and Premium packages.'
  },
  {
    q: "What post-arrival support do you offer?",
    a: 'Our Premium package includes post-arrival support such as airport pickup coordination, SIM/bank setup advice, and ongoing assistance during your initial settling period.'
  },
  {
    q: "What's the typical timeline for the application process?",
    a: 'The timeline usually ranges from 3-6 months depending on your chosen destination, course, and when you start the process relative to application deadlines.'
  }
];

const FAQs = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Answers to common questions about our services, process and policies.</p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow p-6">
          <dl className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                <dt className="font-semibold text-gray-800">{item.q}</dt>
                <dd className="mt-2 text-gray-600">{item.a}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-8 text-center">
            <Link to="/intake-form" className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">Start Your Application</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
