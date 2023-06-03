import React, { useState } from "react";
import "./header.css";
import Link from "./Link";

const Header = ({ selectedPage, setSelectedPage }) => {
  const pages = ["Home", "About", "Stack", "Portfolio", "Contact"];

  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Bartosz Makara
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {pages.map((page, index) => (
              <li className="nav__item">
                <Link
                  key={index + page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
