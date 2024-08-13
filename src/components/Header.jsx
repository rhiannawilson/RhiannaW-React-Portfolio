// Here we are importing a CSS file as a dependency
// import '.';
import React from 'react';

function Header() {
  const text = 'Rhianna\'s'
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

<header>
    <h1>Welcome to {text} Portfolio</h1>
</header>
</div>
  );
}
     

export default Header;
