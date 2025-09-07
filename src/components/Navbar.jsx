import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSnowflake,
  faHandPeace,
} from "@fortawesome/free-regular-svg-icons";

import { faAtom } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  return (
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
