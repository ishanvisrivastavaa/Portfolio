import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="destopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="destopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          className="destopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          className="destopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          className="destopMenuListItem"
        >
          Client
        </Link>
      </div>
      <button
        className="destopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src="contact.png" alt="" className="destopMenuImg" />
        Contact Me
      </button>
      <img
        src="menu.png"
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)} // Change: Toggle showMenu state
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)} // Change: Close menu on link click
          className="listItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          onClick={() => setShowMenu(false)} // Change: Close menu on link click
          className="listItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          onClick={() => setShowMenu(false)} // Change: Close menu on link click
          className="listItem"
        >
          Portfolio
        </Link>
        
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          onClick={() => setShowMenu(false)} // Change: Close menu on link click
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
