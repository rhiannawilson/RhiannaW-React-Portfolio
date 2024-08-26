// ~ NAVIGATION BAR PAGE ~ // 

import { Link } from 'react-router-dom';
import Navibar from './pages/UI/Navibar';
// import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navibar
      links={[
        <Link key={1} to="/">
          Home
        </Link>,
        <Link key={2} to="/projects">
          Projects
        </Link>,
        <Link key={3} to="/about">
          About
        </Link>,
        <Link key={4} to="/contact">
          Contact
        </Link>
      ]}
    />
  );
}
