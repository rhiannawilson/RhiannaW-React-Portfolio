import PropTypes from 'prop-types';
import { useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles/pages.css'; // Assuming you're adding custom CSS

export default function Navibar({ links }) {
  const navRef = useRef(null);

  return (
    <div
      className="navbar-container m-2"
      ref={navRef}
      style={{
        width: "100%", // Stretch to full width
      }}
    >
      <div className="row">
        <Navbar
          bg="transparent"
          variant="transparent"
          fixed="top"
          className="side-navbar shadow-lg p-3 mb-5 rounded row"
          style={{ width: "100%", height: "100%", position: "relative", display: "flex-row" }}
        >
          <Container fluid>
            <Navbar.Brand href="/" className="side-navbar-brand"></Navbar.Brand>
            <ul className="justify-content-center flex-row">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  {link}
                </li>
              ))}
            </ul>
          </Container>
        </Navbar>
      </div>    
    </div>
  );
}

Navibar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
};
