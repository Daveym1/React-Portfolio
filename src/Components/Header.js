import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style.css";

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
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Projects</a>
        <a href="/#">CV</a>
        <a href="/#">Contact</a>
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
