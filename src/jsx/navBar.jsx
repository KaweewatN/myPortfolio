import "../css/navBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const hangleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="top-menu-nav">
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="top-menu-h2">TK</h2>
          </Link>
        </div>
        <ul className="top-menu-ul">
          <Link to="/aboutme">
            <li className="top-menu-li">ABOUT ME</li>
          </Link>
          <Link to="/project">
            <li className="top-menu-li">PROJECTS</li>
          </Link>
          <Link to="/activity">
            <li className="top-menu-li">ACTIVITIES</li>
          </Link>
          <Link to="/contact">
            <li className="top-menu-li">CONTACT</li>
          </Link>
        </ul>
      </nav>

      <nav className="top-menu-nav-mobile">
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="top-menu-h2">TK</h2>
          </Link>
        </div>
        <button onClick={hangleToggle} className="top-menu-button">
          {isOpen ? <ImCross></ImCross> : <FaBars></FaBars>}
        </button>
        {isOpen && (
          <ul className="top-menu-ul-mobile">
            <Link to="/aboutme" onClick={hangleToggle}>
              <li className="top-menu-li-mobile">ABOUT ME</li>
            </Link>
            <Link to="/project" onClick={hangleToggle}>
              <li className="top-menu-li-mobile">PROJECTS</li>
            </Link>
            <Link to="/activity" onClick={hangleToggle}>
              <li className="top-menu-li-mobile">ACTIVITIES</li>
            </Link>
            <Link to="/contact" onClick={hangleToggle}>
              <li className="top-menu-li-mobile">CONTACT</li>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
}
