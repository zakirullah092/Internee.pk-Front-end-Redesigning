import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the imported icons to the library
library.add(faFacebookF, faTwitter, faInstagram);

function Footer() {
  return (
      <div className="footer">
          <div className="footerContent">
              <div className="col1">
                  <img src="/logo.webp" alt="Logo" />
              </div>
              <div className="col2">
                  <ul>
                      <li><b>Company</b></li>
                      <li><p>Contact us</p></li>
                      <li><p>Privacy Policy</p></li>
                      <li><p>Terms & Conditions</p></li>
                  </ul>
              </div>
              <div className="col3">
                  <ul>
                      <li><b>Get help</b></li>
                      <li><p>Training Videos</p></li>
                      <li><p>Get Help</p></li>
                  </ul>
              </div>
              <div className="col4">
                  <ul>
                      <li><b>Socialize with Us</b></li>
                      <li>
                          <div className='social'>
                              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                              <FontAwesomeIcon icon={['fab', 'instagram']} />
                          </div>
                      </li>
                      <li><p>+923453191638</p></li>
                      <li><p>info@internee.pk</p></li>
                      <li><p>Copyright ©2024 internee.pk Pvt Ltd.</p></li>
                      <li><p>All rights reserved.</p></li>
                  </ul>
              </div>
          </div>         
      </div>
  );
}

export default Footer;
