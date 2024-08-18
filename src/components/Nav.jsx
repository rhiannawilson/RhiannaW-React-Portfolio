// // Here we are importing a CSS file as a dependency
// // import '.';
// // import ContactForm from './pages/ContactForm'
// import { Link, useLocation } from 'react-router-dom';
// import Navbar from './pages/UI';

// function Nav () {
//   const currentPage = useLocation().pathname;

//   return (
// <ul className="nav">
// <li className="nav-listItem">
//   <Link
//   to="/"
//     className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//   > 
//     Home
//   </Link>
// </li>
// <li className="nav-listItem">
//   <Link
//     className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
//   >
//     Projects
//   </Link>
// </li>
// <li className="nav-listItem">
//   <Link
//     className={currentPage === '/contactform' ? 'nav-link active' : 'nav-link'}
//   >
//     Contact
//   </Link>
// </li>
// </ul>
//   )
//   }

// export default Nav;

// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './pages/UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/projects">
          Projects
        </Link>,
        <Link key={3} className="nav-link text-light" to="/about">
          About
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>
      ]}
    />
  );
}
