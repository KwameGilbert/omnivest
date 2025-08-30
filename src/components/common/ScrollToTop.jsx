import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to the top of the page on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When route changes, scroll to top with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
