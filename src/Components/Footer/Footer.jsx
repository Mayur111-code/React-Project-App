import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Brand & About */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Oakberry</h5>
              <p className="small">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="d-flex gap-3 social-icons">
                <a href="#" className="text-success fs-5">
                  <FaTwitter />
                </a>
                <a href="#" className="text-success fs-5">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-success fs-5">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Offers */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Offers</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="#">Properties</a>
                </li>
                <li>
                  <a href="#">Agents</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Clients Support</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Company</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#" className="highlight-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">User's Guide</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#" className="highlight-link">
                    Press Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Have a Questions?</h6>
              <ul className="list-unstyled small">
                <li className="d-flex align-items-start gap-2 mb-2">
                  <FaMapMarkerAlt className="text-success mt-1" />
                  <span>
                    210 Downing Street, London, United Kingdom
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 mb-2">
                  <FaPhoneAlt className="text-success" />
                  <span>+2 392 3929 210</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FaPaperPlane className="text-success" />
                  <span>
                     <a href="mailto:mayurborse7440@gmail.com" className="text-light text-decoration-none">  info@infina.com</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="footer-bottom text-center">
            Copyright ©2025 All rights reserved | ❤️ by
            <a
              href="https://github.com/Mayur111-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mayur111-code
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
