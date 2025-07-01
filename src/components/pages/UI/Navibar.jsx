import PropTypes from 'prop-types';
import { useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles/pages.css';




export default function Navibar({ links }) {
  const navRef = useRef(null);

  return (
    <div ref={navRef} style={{ width: "100%" }}>
      <Navbar
        className="py-1"
        style={{ width: "100%" }}
      >
<Container fluid className="d-flex justify-content-between align-items-center">
  <Navbar.Brand href="/" className="side-navbar-brand">RMW</Navbar.Brand>

  <ul className="nav d-flex flex-row m-0">
    {links.map((link, index) => (
      <li className="nav-item px-2" key={index}>
        {link}
      </li>
    ))}
  </ul>
</Container>

</Navbar>

    </div>
  );
}

Navibar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
};
