import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-3 my-4 footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body ">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body">© 2025 Company, Inc</p>
      </footer>
    </>
  );
}

export default Footer;
