import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <>    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Oakberry</h5>
            <p className="small">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-success fs-5"><FaTwitter /></a>
              <a href="#" className="text-success fs-5"><FaFacebookF /></a>
              <a href="#" className="text-success fs-5"><FaInstagram /></a>
            </div>
          </div>

          {/* Offers */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Offers</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Properties</a></li>
              <li><a href="#" className="text-light text-decoration-none">Agents</a></li>
              <li><a href="#" className="text-light text-decoration-none">Locations</a></li>
              <li><a href="#" className="text-light text-decoration-none">Clients Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-success text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-light text-decoration-none">User's Guide</a></li>
              <li><a href="#" className="text-light text-decoration-none">Support Center</a></li>
              <li><a href="#" className="text-success text-decoration-none">Press Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Have a Questions?</h6>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="text-success mt-1" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaPhoneAlt className="text-success" />
                <span>+2 392 3929 210</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaPaperPlane className="text-success" />
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top border-secondary pt-3 mt-3 small">
          Copyright ©2025 All rights reserved | This template is made with ❤️ by Mayur 
          <a href="https://colorlib.com" className="text-success text-decoration-none ms-1">Colorlib</a>
        </div>
      </div>
    </footer>
    </>

  );
};

export default Footer;
