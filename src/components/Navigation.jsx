// ~ NAVIGATION BAR PAGE ~ // 

import { Link } from 'react-router-dom';
import Navibar from './pages/UI/Navibar';
// import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject, faBookOpenReader, faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navibar
      links={[
        <Link
          key={1}
          to="/"
          onMouseDown={(e) => e.currentTarget.blur()}
        >  <FontAwesomeIcon icon={faHouse} className="me-2" />
          Home
        </Link>,
        <Link
          key={2}
          to="/projects"
          onMouseDown={(e) => e.currentTarget.blur()}
        >  <FontAwesomeIcon icon={faDiagramProject} className="me-2" />

          Projects
        </Link>,
        <Link
          key={3}
          to="/about"
          onMouseDown={(e) => e.currentTarget.blur()}
        >  <FontAwesomeIcon icon={faBookOpenReader} className="me-2" />

          About
        </Link>,
        <Link
          key={4}
          to="/contact"
          onMouseDown={(e) => e.currentTarget.blur()}
        >   <FontAwesomeIcon icon={faEnvelope} className="me-2" />

          Contact
        </Link>
      ]}
    />
  );
}