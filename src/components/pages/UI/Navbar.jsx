export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <div className="containerNav">
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-links">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  