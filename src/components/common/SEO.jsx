import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * A utility component to add consistent SEO metadata to pages
 */
const SEO = ({ title, description, keywords, canonical, children }) => {
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
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {children}
    </>
  );
};

export default SEO;
