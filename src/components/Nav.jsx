// Here we are importing a CSS file as a dependency
// import '.';
import 'react';

function Nav() {
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
</div>
  );
}
     

export default Nav;