import React from "react";

import logoDark from "src/assets/icons/logo-black.svg";
import { footerLinks, socialMedia } from "../components/items/Footer";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__link-group">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="footer__link-item">
                <div className="footer__link-title">
                  <h4 className="footer__link-heading">{footerlink.title}</h4>
                </div>
                <ul className="footer__link-list">
                  {footerlink.links.map((link) => (
                    <li key={link.name} className="footer__link">
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__copyright">
          <div className="footer__closing">
            <img src={logoDark} alt="" />
            <p> &copy; Splashthebrand.com</p>
          </div>
          <div className="footer__social-media">
            {socialMedia.map((social) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                onClick={() => window.open(social.link)}
                className="footer__social-icon"
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
