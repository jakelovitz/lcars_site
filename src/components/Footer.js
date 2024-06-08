import React from 'react';
import './../assets/styling.css';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-inside">
          <div className="footer-text">
            <p>
              LCARS Inspired Website Template by{' '}
              <a href="https://www.thelcars.com">www.TheLCARS.com </a>
            </p>
            <p>Translated into JSX and modified for this site by Jake Lovitz</p>
          </div>
        </div>
        <div className="footer-panel">
          <span className="hop"></span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
