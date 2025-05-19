// // ~ PORTFOLIO CONTAINER ~ //

// import { useState } from 'react';
// import ContactForm from './pages/ContactForm'
// import Projects from './pages/Projects'
// import About from './pages/About'
// import HomePage from './pages/HomePage'

// import Header from './pages/Header';
// import Footer from './pages/Footer';
// import Nav from './Navigation';


// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('HomePage');

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === 'HomePage') {
//         return <HomePage />;
//      }
//     if (currentPage === 'Projects') {
//       return <Projects />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     return <ContactForm />;
//   };
  
//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     // <div>
//     //   {/* We are passing the currentPage from state and the function to update it */}
//     //   <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//     //   {/* Here we are calling the renderPage method which will return a component  */}
//     //   <main className="mx-3">{renderPage()}
     
//     <> 
//     <Header />
//       <Footer />
//       </>
//   );
// }



// THIS PAGE NO LONGER NEEDED 


// import { useState } from 'react';
// import ContactForm from './pages/ContactForm';
// import Projects from './pages/Projects';
// import About from './pages/About';
// import HomePage from './pages/HomePage';

// import Header from './pages/Header';
// import Footer from './pages/Footer';
// import Nav from './Navigation'; // You forgot this in your shared snippet!

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('HomePage');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'HomePage':
//         return <HomePage />;
//       case 'Projects':
//         return <Projects />;
//       case 'About':
//         return <About />;
//       default:
//         return <ContactForm />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Header />
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       <main className="flex-grow-1 p-3">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }
