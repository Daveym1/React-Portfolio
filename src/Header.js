import "./style.css";

// Header component. Will return the navbar on each page

export default function Header () {
  return (
    <nav className="navbar">
      <img src="https://loremflickr.com/150/150" alt="Logo placeholder" />
      <h1>David Marsh</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>CV</li>
        <li>Contact</li>
      </ul>
    </nav>
    
  );
};
