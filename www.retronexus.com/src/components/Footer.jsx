import React from 'react';
import GithubIcon from '../assets/images/GithubIcon.png';
import TwitterIcon from '../assets/images/TwitterIcon.png'

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="connect-us">
          <h3>Connect Us</h3>
          <div className="social-icons">
              <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" height="35" width="35" />
            </a>
            <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub" height="35" width="35" />
            </a>
          </div>
        </div>
        <div className="copyright">
            <br></br><br></br>
          <p>&copy;2023 RetroNexus</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
