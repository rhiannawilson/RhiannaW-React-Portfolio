import {useState, useEffect} from 'react';
import ContactForm from './pages/ContactForm'
import Projects from './pages/Projects'
import About from './pages/About'
import HomePage from './pages/HomePage'

import Header from './pages/Header';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'HomePage') {
        return <HomePage />;
     }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    return <ContactForm />;
  };

  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <div>
    //   {/* We are passing the currentPage from state and the function to update it */}
    //   <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    //   {/* Here we are calling the renderPage method which will return a component  */}
    //   <main className="mx-3">{renderPage()}
     
    <> 
    <Header />
      <Footer />
      </>
  );
}