import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <span>Navbar</span>
      <ul className="list-group">
        <li className="list-group-item">Service</li>
        <li className="list-group-item">Contact</li>
        <li className="list-group-item">About</li>
        <li className="list-group-item">Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
