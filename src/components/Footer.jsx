import React from 'react';

  // In Navbar, we can assign a style from an object by using curly braces
  function Footer() {
    const text = 'Thank You'
    return (
      <div className="footer">
        <h2>{text}</h2>
        <p>&copy; 2024 Rhianna. All rights reserved.</p>
      </div>
    );
  }
      
  export default Footer;
  