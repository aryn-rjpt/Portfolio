import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSnowflake,
  faHandPeace,
} from "@fortawesome/free-regular-svg-icons";

import { faAtom } from "@fortawesome/free-solid-svg-icons";



function Navbar() {

  // const [navbarY, setNavbarY] = useState(0);

  // useEffect(() => {

  //   window.addEventListener("scroll", () => {
  //     setNavbarY(window.scrollY);      
  //   });

  // }, []);

  return (
    // <div className="navbar" style={{top: `calc(80vh + ${navbarY}px)`}}>
    <div className="navbar">
      <div className="nav-item">
        <a href="#about">
          <FontAwesomeIcon icon={faHandPeace} />
          <span>About</span>
        </a>
      </div>
      <div className="nav-item">
        <a href="#proj-container">
          <FontAwesomeIcon icon={faSnowflake} />
          <span>Projects</span>
        </a>
      </div>
      <div className="nav-item">
        <a href="#skills">
          <FontAwesomeIcon icon={faAtom} />
          <span>Skills</span>
        </a>
      </div>
      <div className="nav-item">
        <a href="#connect">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Connect</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
