import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style.css";
import { NavLink } from "react-router-dom";

// Header component. Will return the navbar on each page

export default function Header() {
  const navRef = useRef();

  // When showNavBar is called, the navbar will be shown or hidden

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h1>David Marsh</h1>
      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavBar}>
          Home
        </NavLink>
        <NavLink to="projects" onClick={showNavBar}>
          Projects
        </NavLink>
        <NavLink to="/cv" onClick={showNavBar}>
          CV
        </NavLink>
        <NavLink to="/contact" onClick={showNavBar}>
          Contact
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
