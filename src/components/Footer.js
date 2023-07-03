import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <div className="social-links footer">
        <a
          href="https://www.facebook.com/TamdeDveri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/TamdeDveri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className="footer-p">© 2023 TamDeDBEPI. Усі права захищено.</p>
    </div>
  );
}

export default Footer;
