import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-body mb-5">
        <div className="footer-column">
          <h3 className="footer-title footer-brand">Vaccination</h3>
          <p>
            Our goal is to help the world free from the ongoing pandemic
          </p>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            <p>About Us</p>
            <p>Features</p>
            <p>{`News & Blog`}</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <p>How We Work?</p>
            <p>Capital</p>
            <p>Security</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="footer-info flex">
        <p>@2022 Vaccination. All rights reserved</p>
        <div className="flex ms-auto">
          <p className="me-4">{`Terms & Agreements`}</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
