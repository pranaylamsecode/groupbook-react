import React from "react";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand py-1" href="/">
              <img
                src="https://reservemygroup.com/public/frontend/img/logo.svg"
                alt="Groupbook Logo"
              />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right d-print-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarExample2"
              aria-controls="navbarExample2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse d-print-none"
              id="navbarExample2"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://reservemygroup.com/destinations"
                  >
                    Destinations <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://reservemygroup.com/events"
                  >
                    Upcoming Events
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://reservemygroup.com/experiences"
                  >
                    Experiences
                  </a>
                </li>
                <li className="nav-item" id="menu-pipe">
                  <a className="nav-link" href="#">
                    |
                  </a>
                </li>
              </ul>

              <a className="nav-item" href="https://reservemygroup.com/login">
                Login
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
