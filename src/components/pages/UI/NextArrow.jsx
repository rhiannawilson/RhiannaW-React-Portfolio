import 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pages } from './routes';  
import '../styles/NextArrow.css'; 

export default function NextArrow() {
  const location = useLocation();
  const navigate = useNavigate();

  // Find current page index in pages array
  const currentIndex = pages.indexOf(location.pathname);

  // Calculate next page index (loop back to start)
  const nextIndex = (currentIndex + 1) % pages.length;

  // Handler for clicking the arrow button
  const handleNext = () => {
    navigate(pages[nextIndex]);
  };

return (
    <button
      className="next-arrow-btn"
      onClick={handleNext}
      aria-label="Next Page"
    >
      →
    </button>
);
}