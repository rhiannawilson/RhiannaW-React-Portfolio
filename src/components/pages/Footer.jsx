// ~ FOOTER ~ //

import 'react';
import './styles/Footer.css';


const styles = {
  footerStyle: {
    background: 'light',
  },
  paraStyle: {
    fontSize: '10px',
  },
};

function Footer() {
    return (
      <div className="footer">

      <footer style={styles.footerStyle} className="footer">
      <p style={styles.paraStyle}>&copy; Rhianna Wilson. 2024 Portfolio. All rights reserved.</p>
        </footer>

      </div>
    );
  }
      
  export default Footer;
  