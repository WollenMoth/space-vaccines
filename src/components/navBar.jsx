import React from "react";
import Button from "react-bootstrap/Button";

function NavBar(props) {
  return (
    <div className="grid">
      <div className="navbar-background" />
      <div className="navbar">
        <a className="navbar-brand" href="./#">
          Vaccination
        </a>
        <div className="navbar-content">
          <a href="./#" className="navbar-item">
            Database
          </a>
          <a href="./#" className="navbar-item">
            Education
          </a>
          <a href="./#" className="navbar-item">
            News
          </a>
          <a href="./#" className="navbar-item">
            Regulation
          </a>
          <Button className="navbar-button">Hoax Buster</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
