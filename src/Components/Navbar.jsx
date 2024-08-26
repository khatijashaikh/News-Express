import React from 'react';

const Navbar = ({ category, setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-5">NEWS EXPRESS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {['technology', 'health', 'entertainment', 'business', 'sports'].map((cat) => (
              <li
                key={cat}
                className={`nav-item ${category === cat ? 'active' : ''}`}
              >
                <a
                  className="nav-link"
                  onClick={() => setCategory(cat)}
                  href="#"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
