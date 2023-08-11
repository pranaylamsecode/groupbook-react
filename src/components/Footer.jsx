import React from "react";

export const Footer = () => {
  return (
    <>
      <footer
        className="position-relative z-index-10 d-print-none  bg-white"
        id="footer"
      >
        <div className="py-6 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="fw-bold text-uppercase text-dark mb-3">
                  <img
                    src="https://reservemygroup.com/public/frontend/img/logo.svg"
                    alt=""
                    className="navbar-brand py-1"
                  />
                </div>
                <p>Simplifying Group Travel</p>
              </div>

              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 className="text-uppercase text-dark mb-3">Quick Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className=""
                      href="https://reservemygroup.com/destinations"
                    >
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://reservemygroup.com/events">
                      Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="https://reservemygroup.com/experiences"
                    >
                      Experiences
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://reservemygroup.com/login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 className="text-uppercase text-dark mb-3"></h6>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className=""
                      href="https://reservemygroup.com/become-a-hotel-agent"
                    >
                      Become Hotel Agent
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="https://reservemygroup.com/become-an-event-organizer"
                    >
                      Become Event Organizer
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://reservemygroup.com/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://reservemygroup.com/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://reservemygroup.com/sitemap">
                      Site Map
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0"></div>
            </div>
          </div>
        </div>

        <div className="py-4 fw-light bg-gray-800 text-gray-300">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="text-sm mb-md-0 text-white">
                  © 2023 Groupbook. All rights reserved.
                  <a
                    className="text-white"
                    href="https://reservemygroup.com/privacy"
                  >
                    &nbsp; Privacy Policy
                  </a>
                  <a
                    className="text-white"
                    href="https://reservemygroup.com/term"
                  >
                    {" "}
                    | Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
