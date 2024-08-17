// Here we are importing a CSS file as a dependency
// import '.';
// import ContactForm from './pages/ContactForm'


function Nav ({ currentPage, handlePageChange }) {
  return (
<ul className="nav">
<li className="nav-item">
  <a
    href="#homepage"
    onClick={() => handlePageChange('HomePage')}
    className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}
  > 
    Home
  </a>
</li>
<li className="nav-item">
  <a
    href="#projects"
    onClick={() => handlePageChange('Projects')}
    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
  >
    Projects
  </a>
</li>
<li className="nav-item">
  <a
    href="#contactform"
    onClick={() => handlePageChange('contactform')}
    className={currentPage === 'contactform' ? 'nav-link active' : 'nav-link'}
  >
    Contact
  </a>
</li>
</ul>
  )
  }

export default Nav;