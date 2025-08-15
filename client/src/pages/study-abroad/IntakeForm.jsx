import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailService from '../../services/EmailService';

const initialState = {
  fullName: '',
  contact: '',
  education: '',
  countries: [],
  course: '',
  studyLevel: '',
  englishTest: '',
  funding: '',
  intake: '',
  support: [],
};

const educationOptions = [
  'High School',
  'Bachelor’s Degree',
  'Master’s Degree',
  'PhD',
  'Other',
];
const countryOptions = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Other'];
const studyLevelOptions = ['Bachelor’s', 'Master’s', 'PhD', 'Foundation/Pathway'];
const englishTestOptions = [
  'Yes',
  'No',
  'I plan to',
  'I studied in English',
];
const fundingOptions = [
  'Yes – fully funded',
  'Yes – partially funded',
  'No – I’m looking for scholarships',
];
const intakeOptions = [
  'January 2025',
  'May 2025',
  'September 2025',
  'Other',
];
const supportOptions = [
  'University/course selection',
  'Visa application',
  'Scholarship search',
  'SOP/Essay help',
  'Accommodation & flights',
  'Other',
];

const IntakeForm = () => {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await EmailService.handleContactFormSubmission({
        ...form,
        subject: 'New Intake Form Submission',
      });
      if (response.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your form has been submitted.' });
        setForm(initialState);
      } else {
        setSubmitStatus({ type: 'error', message: response.message || 'Submission failed.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Connection error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-8 text-center text-gray-800">
          Study Abroad Intake Form
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required placeholder="Your full name" />
            <p className="text-xs text-gray-500 mt-1">So we can address you properly</p>
          </div>
          {/* 2. Email & Phone */}
          <div>
            <label className="block font-semibold mb-1">Email & Phone Number</label>
            <input name="contact" value={form.contact} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required placeholder="Email and phone number" />
            <p className="text-xs text-gray-500 mt-1">For follow-up and consultation</p>
          </div>
          {/* 3. Highest Education */}
          <div>
            <label className="block font-semibold mb-1">What’s your highest level of education?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {educationOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="education" value={opt} checked={form.education === opt} onChange={handleChange} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* 4. Countries Interested */}
          <div>
            <label className="block font-semibold mb-1">What country (or countries) are you interested in studying in?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {countryOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="checkbox" name="countries" value={opt} checked={form.countries.includes(opt)} onChange={handleChange} />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* 5. Course/Program */}
          <div>
            <label className="block font-semibold mb-1">What course or program are you interested in?</label>
            <input name="course" value={form.course} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required placeholder="E.g. Nursing, Computer Science, MBA" />
            <p className="text-xs text-gray-500 mt-1">E.g. Nursing, Computer Science, MBA, Public Health</p>
          </div>
          {/* 6. Level of Study */}
          <div>
            <label className="block font-semibold mb-1">What level of study are you applying for?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {studyLevelOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="studyLevel" value={opt} checked={form.studyLevel === opt} onChange={handleChange} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* 7. English Test */}
          <div>
            <label className="block font-semibold mb-1">Have you taken an English proficiency test (e.g. IELTS, TOEFL)?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {englishTestOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="englishTest" value={opt} checked={form.englishTest === opt} onChange={handleChange} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* 8. Funding */}
          <div>
            <label className="block font-semibold mb-1">Do you have funding or a sponsor for your studies?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {fundingOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="funding" value={opt} checked={form.funding === opt} onChange={handleChange} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* 9. Intake */}
          <div>
            <label className="block font-semibold mb-1">When would you like to start studying?</label>
            <select name="intake" value={form.intake} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required>
              <option value="">Select intake</option>
              {intakeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {/* 10. Support Needed */}
          <div>
            <label className="block font-semibold mb-1">What support do you need?</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {supportOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="checkbox" name="support" value={opt} checked={form.support.includes(opt)} onChange={handleChange} />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
          {submitStatus && (
            <div className={`mt-4 p-3 rounded-lg text-center ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default IntakeForm;
