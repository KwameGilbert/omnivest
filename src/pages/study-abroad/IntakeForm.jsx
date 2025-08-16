import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailService from '../../services/EmailService';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  education: '',
  countries: [],
  course: '',
  studyLevel: '',
  englishTest: '',
  englishScore: '',
  funding: '',
  budget: '',
  intake: '',
  support: [],
  additionalInfo: '',
};

const educationOptions = [
  'High School',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'PhD',
  'Other',
];
const countryOptions = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Other'];
const studyLevelOptions = ['Bachelor\'s', 'Master\'s', 'PhD', 'Foundation/Pathway'];
const englishTestOptions = [
  'Yes',
  'No',
  'I plan to',
  'I studied in English',
];
const fundingOptions = [
  'Yes – fully funded',
  'Yes – partially funded',
  'No – I\'m looking for scholarships',
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

  const filledFields = useMemo(() => {
    return Object.values(form).filter(value => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== '';
    }).length;
  }, [form]);

  const totalFields = Object.keys(initialState).length;
  const progress = (filledFields / totalFields) * 100;

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
      // Combine email and phone for backwards compatibility
      const formData = {
        ...form,
        contact: `${form.email} | ${form.phone}`,
        subject: 'New Intake Form Submission',
      };
      
      const response = await EmailService.handleContactFormSubmission(formData);
      if (response.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your form has been submitted. Our team will contact you shortly.' });
        setForm(initialState);
      } else {
        setSubmitStatus({ type: 'error', message: response.message || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Connection error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-6 md:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center mb-6 text-orange-500 hover:text-orange-600 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to homepage
        </Link>
        
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-gray-800">
              Study Abroad Intake Form
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Complete this form to help us understand your study abroad goals better. Our team will review your information and contact you for a personalized consultation.
            </p>
          </motion.div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Form Progress</span>
              <span className="text-sm font-bold text-orange-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-orange-400 to-amber-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Full Name */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="fullName" className="block font-semibold mb-1 text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input 
                id="fullName"
                name="fullName" 
                value={form.fullName} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                required 
                placeholder="Your full name" 
              />
              <p className="text-xs text-gray-500 mt-1">So we can address you properly</p>
            </div>
            
            {/* 2. Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-1 text-gray-700">Email Address <span className="text-red-500">*</span></label>
              <input 
                id="email"
                type="email"
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                required 
                placeholder="Your email address" 
              />
              <p className="text-xs text-gray-500 mt-1">We'll send updates about your application</p>
            </div>
            
            {/* 3. Phone */}
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1 text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <input 
                id="phone"
                type="tel"
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                required 
                placeholder="Your phone number" 
              />
              <p className="text-xs text-gray-500 mt-1">For consultation scheduling</p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-8"></div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Background</h3>
          
          {/* 3. Highest Education */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-700">What's your highest level of education? <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {educationOptions.map((opt) => (
                <label key={opt} className="relative">
                  <input 
                    type="radio" 
                    name="education" 
                    value={opt} 
                    checked={form.education === opt} 
                    onChange={handleChange} 
                    required 
                    className="sr-only peer"
                  />
                  <div className="border rounded-lg p-3 text-center text-sm cursor-pointer transition-all peer-checked:bg-orange-50 peer-checked:border-orange-500 peer-checked:text-orange-700 peer-checked:shadow-md hover:bg-gray-50 flex items-center justify-center gap-2">
                    {opt}
                    <AnimatePresence>
                      {form.education === opt && (
                        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
                          <Check className="w-4 h-4 text-orange-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {/* 4. Countries Interested */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-700">What country (or countries) are you interested in? <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {countryOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="checkbox" 
                    name="countries" 
                    value={opt} 
                    checked={form.countries.includes(opt)} 
                    onChange={handleChange} 
                    className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Select all that apply</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 5. Course/Program */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">What course or program are you interested in? <span className="text-red-500">*</span></label>
              <input 
                name="course" 
                value={form.course} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                required 
                placeholder="E.g. Computer Science, MBA" 
              />
              <p className="text-xs text-gray-500 mt-1">Be as specific as possible</p>
            </div>
            
            {/* 6. Level of Study */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">What level of study are you applying for? <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {studyLevelOptions.map((opt) => (
                  <label key={opt} className="relative">
                    <input 
                      type="radio" 
                      name="studyLevel" 
                      value={opt} 
                      checked={form.studyLevel === opt} 
                      onChange={handleChange} 
                      required 
                      className="sr-only peer"
                    />
                    <div className="border rounded-lg p-3 text-center text-sm cursor-pointer transition-all peer-checked:bg-orange-50 peer-checked:border-orange-500 peer-checked:text-orange-700 hover:bg-gray-50">
                      {opt}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-8"></div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 7. English Test */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Have you taken an English proficiency test? <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {englishTestOptions.map((opt) => (
                  <label key={opt} className="relative">
                    <input 
                      type="radio" 
                      name="englishTest" 
                      value={opt} 
                      checked={form.englishTest === opt} 
                      onChange={handleChange} 
                      required 
                      className="sr-only peer"
                    />
                    <div className="border rounded-lg p-3 text-center text-sm cursor-pointer transition-all peer-checked:bg-orange-50 peer-checked:border-orange-500 peer-checked:text-orange-700 hover:bg-gray-50">
                      {opt}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* English Test Score (conditional) */}
            {form.englishTest === 'Yes' && (
              <div>
                <label className="block font-semibold mb-2 text-gray-700">What was your score? <span className="text-red-500">*</span></label>
                <input 
                  name="englishScore" 
                  value={form.englishScore} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                  required={form.englishTest === 'Yes'} 
                  placeholder="E.g. IELTS 7.0, TOEFL 100" 
                />
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* 8. Funding */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Do you have funding for your studies? <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                {fundingOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                    <input 
                      type="radio" 
                      name="funding" 
                      value={opt} 
                      checked={form.funding === opt} 
                      onChange={handleChange} 
                      required 
                      className="w-4 h-4 text-orange-500 focus:ring-orange-400" 
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* 9. Budget (optional) */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">What is your budget range per year? (Optional)</label>
              <input 
                name="budget" 
                value={form.budget} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
                placeholder="E.g. $15,000-$25,000" 
              />
              <p className="text-xs text-gray-500 mt-1">This helps us recommend suitable options</p>
            </div>
          </div>
          {/* 10. Intake */}
          <div className="mt-6">
            <label className="block font-semibold mb-2 text-gray-700">When would you like to start studying? <span className="text-red-500">*</span></label>
            <select 
              name="intake" 
              value={form.intake} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all" 
              required
            >
              <option value="">Select intake</option>
              {intakeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          
          {/* 11. Support Needed */}
          <div className="mt-6">
            <label className="block font-semibold mb-2 text-gray-700">What support do you need? <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {supportOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="checkbox" 
                    name="support" 
                    value={opt} 
                    checked={form.support.includes(opt)} 
                    onChange={handleChange} 
                    className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Select all that apply</p>
          </div>
          
          {/* 12. Additional Information */}
          <div className="mt-6">
            <label className="block font-semibold mb-2 text-gray-700">Any additional information you'd like to share? (Optional)</label>
            <textarea 
              name="additionalInfo" 
              value={form.additionalInfo} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none transition-all min-h-[120px]" 
              placeholder="Tell us anything else that might help us understand your goals and needs better"
            ></textarea>
          </div>
          <div className="border-t border-gray-200 my-8"></div>
          
          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </motion.button>
          
          {submitStatus && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg text-center ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
            >
              {submitStatus.message}
            </motion.div>
          )}
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our <Link to="/privacy-policy" className="text-orange-500 underline">Privacy Policy</Link> and consent to being contacted regarding your application.
          </p>
        </form>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
