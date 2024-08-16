// Here we are importing a CSS file as a dependency
// import '.';
import 'react';
// import ContactForm from './pages/ContactForm'




function Nav(currentPage, handlePageChange) {
  return (
<div>
<nav className="nav">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<ul className="nav nav-pills ml-auto">
<li className="nav-item">
  <a
    href="#home"
    onClick={() => handlePageChange('home')}
    className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
  >
    About
  </a>
</li>
<li className="nav-item">
  <a
    href="#about"
    onClick={() => handlePageChange('about')}
    className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
  >
    Portfolio
  </a>
</li>
<li className="nav-item">
  <a
    href="#projects"
    onClick={() => handlePageChange('projects')}
    className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
  >
    Contact
  </a>
</li>
<li className="nav-item">
  <a
    href="#ContactForm"
    onClick={() => handlePageChange('ContactForm')}
    className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
  >
    Resume
  </a>
</li>
</ul>

</div>
  )
  }

export default Nav;