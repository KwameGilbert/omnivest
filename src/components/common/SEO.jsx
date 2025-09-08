import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * A utility component to add consistent SEO metadata to pages
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = 'https://omnivesteduconsult.co.uk/images/omnivest_logo.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  children 
}) => {
  // Industry-specific keywords provided by the client
  const industryKeywords = [
    'gilbert','elikplim','kukah','omnivest', 'education consultancy', 'omniveste education', 'scholarship', 
    'UK', 'USA', 'Canada', 'Visa', 'British Council', 'IELTS', 'IDP', 
    'Edusol', 'Excel Plus', 'come study international', 'Ace study Abroad', 
    'study and work abroad', 'scholarship', 'bcie', 'astolinks', 'QS', 'SI-UK', 
    'Crizac', 'jokings educare', 'globe educational', 'CHIEF', 
    'centre for higher educational facilitation', 'overseas education',
    'international student', 'university application', 'education consultant',
    'UK student visa', 'USA student visa', 'Canada student visa', 
    'scholarship applications', 'study abroad UK', 'study abroad USA', 'study abroad Canada',
    'university admission', 'educational guidance', 'student accommodation',
    'pre-departure briefing', 'post-arrival support', 'higher education abroad'
  ];

  // Combine page-specific keywords with industry keywords
  const enhancedKeywords = keywords 
    ? `${keywords}, ${industryKeywords.join(', ')}` 
    : industryKeywords.join(', ');

  // Build the full title
  const fullTitle = title ? `${title} | Omnivest Educational Consult` : 'Omnivest Educational Consult';
  
  // Default canonical URL based on the current path or use provided one
  const baseUrl = 'https://omnivesteduconsult.co.uk';
  const path = canonical || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const canonicalUrl = path.startsWith('http') ? path : `${baseUrl}${path}`;
  
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta name="keywords" content={enhancedKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* OpenGraph meta tags for better social sharing */}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content="Omnivest Educational Consult" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={ogImage} />
        
        {/* Schema.org markup for Education Organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Omnivest Educational Consult",
            "url": "https://omnivesteduconsult.co.uk",
            "logo": "https://omnivesteduconsult.co.uk/images/omnivest_logo.png",
            "description": "${description || 'Expert educational consultancy for international students seeking to study abroad.'}",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "United Kingdom"
            },
            "sameAs": [
              "https://www.facebook.com/omnivesteduconsult",
              "https://www.instagram.com/omnivesteduconsult",
              "https://www.linkedin.com/company/omnivest-educational-consult"
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "University Application Assistance",
                  "description": "Professional guidance for applying to universities in the UK, USA, Canada and other countries."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Visa Application Support",
                  "description": "Expert assistance with student visa applications for international study."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Scholarship Application Guidance",
                  "description": "Help finding and applying for scholarships and financial aid for international education."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "IELTS Test Preparation",
                  "description": "Preparation courses and materials for English language proficiency tests."
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      {children}
    </>
  );
};

export default SEO;
