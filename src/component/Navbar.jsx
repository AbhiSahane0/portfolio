import "./Navbar.jsx.css";

function Navbar() {
  return (
    <section id="nav">
      <nav className="navbar navbar-expand-md ">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
