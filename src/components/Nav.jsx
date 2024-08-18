import { Link } from 'react-router-dom';
import Navbar from './pages/UI/Navbar';
// import './pages/styles/pages.css';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
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
