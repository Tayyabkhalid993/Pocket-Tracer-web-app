'use client';

import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      // Retry scrolling if element isn't immediately available
      const tryScroll = (attempts = 5, delay = 100) => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else if (attempts > 0) {
          setTimeout(() => tryScroll(attempts - 1, delay), delay);
        }
      };
      tryScroll();
    }
  }, []);

  useEffect(() => {
    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange, pathname, searchParams]);

  return null;
}