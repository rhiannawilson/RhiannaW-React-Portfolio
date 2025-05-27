// ~ NAVIGATION BAR PAGE ~ // 

import { Link } from 'react-router-dom';
import Navibar from './pages/UI/Navibar';
// import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navibar
      links={[
        <Link
          key={1}
          to="/"
          onMouseDown={(e) => e.currentTarget.blur()}
        >
          Home
        </Link>,
        <Link
          key={2}
          to="/projects"
          onMouseDown={(e) => e.currentTarget.blur()}
        >
          Projects
        </Link>,
        <Link
          key={3}
          to="/about"
          onMouseDown={(e) => e.currentTarget.blur()}
        >
          About
        </Link>,
        <Link
          key={4}
          to="/contact"
          onMouseDown={(e) => e.currentTarget.blur()}
        >
          Contact
        </Link>
      ]}
    />
  );
}