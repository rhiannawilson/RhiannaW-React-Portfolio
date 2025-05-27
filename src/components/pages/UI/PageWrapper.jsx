// src/components/UI/PageWrapper.jsx
import { useEffect, useState } from 'react';
import '../../pages/styles/PageTransition.css';

export default function PageWrapper({ children }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, []);

  return (
    <div className={`page-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
}
