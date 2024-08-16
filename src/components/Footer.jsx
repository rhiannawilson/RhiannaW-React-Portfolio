import 'react';
import '../styles/Footer.css';



const styles = {
  footerStyle: {
    background: '#8A7968',
  },
  paraStyle: {
    fontSize: '10px',
  },
};

function Footer() {
    const text = 'Thank You'
    return (
      <div className="footer">

      <footer style={styles.footerStyle} className="footer">
      <h2>{text}</h2>
      <p style={styles.paraStyle}>&copy; Rhianna Wilson. 2024 Portfolio. All rights reserved.</p>
        </footer>

      </div>
    );
  }
      
  export default Footer;
  