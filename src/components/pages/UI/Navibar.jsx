import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles/pages.css'; // Assuming you're adding custom CSS

export default function Navibar({ links }) {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <div className="navbar-container" ref={navRef}>
      <Navbar
        bg="transparent"
        variant="transparent"
        expand={false}
        fixed="top"
        className="side-navbar shadow-lg p-3 mb-5 rounded"
        style={{ width: "100%", height: "100%", position: "relative", display: "flex-row" }}
      >
        <Container fluid>
          <Navbar.Brand href="/" className="side-navbar-brand"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav} />
          <Navbar.Collapse id="responsive-navbar-nav" className="side-navbar-collapse">
            {showNav && (
              <ul className="nav nav-pills flex-row">
                {links.map((link, index) => (
                  <li className="nav-item" key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Navibar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
};
