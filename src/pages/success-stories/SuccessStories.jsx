import React, { useState, useRef, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import successStories from '../../data/successStoriesData';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story, onOpen }) => (
  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-lg shadow p-4">
    <img loading="lazy" src={story.image} alt={story.name} className="w-full h-40 object-cover rounded-md mb-3" />
    <h3 className="font-semibold text-lg">{story.name}</h3>
    <p className="text-sm text-gray-600">{story.program} — {story.university}, {story.country}</p>
    <div className="flex items-center mt-2 gap-2">
      {Array.from({ length: story.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400" />)}
    </div>
    <p className="text-sm text-gray-700 mt-3 line-clamp-3">{story.testimonial}</p>
    <div className="mt-4 flex gap-2">
      <button onClick={() => onOpen(story)} className="text-orange-500 underline" aria-haspopup="dialog">View Details</button>
      <Link to="/booking" className="ml-auto inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-2 rounded">Get Help</Link>
    </div>
  </motion.div>
);

const SuccessStories = () => {
  const [active, setActive] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // Update document title & meta description and inject JSON-LD for reviews
  useEffect(() => {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    // JSON-LD
    const ld = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Omnivest Success Stories",
      "itemListElement": successStories.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": s.name,
          "description": s.testimonial,
          "review": {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": s.rating },
            "author": { "@type": "Person", "name": s.name }
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'success-stories-jsonld';
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // focus management: trap focus in modal and restore on close
  useEffect(() => {
    if (!active) return;

    lastFocusedRef.current = document.activeElement;
    const focusableSelector = 'a[href], area[href], input:not([disabled]), button:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const modal = modalRef.current;
    const focusable = modal ? Array.from(modal.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null) : [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first) first.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActive(null);
      }
      if (e.key === 'Tab') {
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') lastFocusedRef.current.focus();
    };
  }, [active]);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <SEO
        title="Success Stories | Omnivest Educational Consult"
        description="Read success stories from students Omnivest has helped achieve their international education dreams with testimonials, ratings, and real results."
        keywords="student success stories, study abroad testimonials, international student achievements, university application success, education consultant results, student testimonials"
        canonical="https://omnivesteduconsult.co.uk/success-stories"
      />
      <div className="container mx-auto max-w-6xl">
        <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">Success Stories</motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map(story => (
            <StoryCard key={story.id} story={story} onOpen={setActive} />
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="story-title">
            <motion.div ref={modalRef} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6">
              <div className="flex gap-4">
                <img loading="lazy" src={active.image} alt={active.name} className="w-40 h-40 object-cover rounded-md" />
                <div>
                  <h2 id="story-title" className="text-xl font-bold">{active.name}</h2>
                  <p className="text-sm text-gray-600">{active.program} — {active.university}, {active.country}</p>
                  <div className="flex items-center mt-2 gap-2">
                    {Array.from({ length: active.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400" />)}
                  </div>
                  <p className="mt-3 text-gray-700">{active.testimonial}</p>
                  <div className="mt-4 space-y-2">
                    {active.documents && active.documents.length > 0 ? (
                      active.documents.map((doc, i) => (
                        <a key={i} href={doc.href} className="text-orange-500 underline block">{doc.label}</a>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No documents available</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button ref={closeButtonRef} onClick={() => setActive(null)} className="px-4 py-2 bg-gray-200 rounded">Close</button>
                <Link to="/booking" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded">Get Started</Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;
