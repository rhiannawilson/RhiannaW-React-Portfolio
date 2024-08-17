// Here we are importing a CSS file as a dependency
// import '.';
// import ContactForm from './pages/ContactForm'
import { Link, useLocation } from 'react-router-dom';

function Nav () {
  const currentPage = useLocation().pathname;

  return (
<ul className="nav">
<li className="nav-listItem">
  <Link
  to="/"
    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
  > 
    Home
  </Link>
</li>
<li className="nav-listItem">
  <Link
    className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
  >
    Projects
  </Link>
</li>
<li className="nav-listItem">
  <Link
    className={currentPage === '/contactform' ? 'nav-link active' : 'nav-link'}
  >
    Contact
  </Link>
</li>
</ul>
  )
  }

export default Nav;