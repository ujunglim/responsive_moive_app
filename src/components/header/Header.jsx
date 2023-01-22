import React, { useEffect, useRef } from "react";
import "./header.scss";

import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Button, { OutlineButton } from "../button/Button";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Moives",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const activeIdx = headerNav.findIndex((h) => h.path === pathname);

  const shrinkHeader = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      headerRef.current.classList.add("shrink");
    } else {
      headerRef.current.classList.remove("shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", shrinkHeader);
    return () => window.removeEventListener("scroll", shrinkHeader);
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div class="header__wrap container">
        <div class="logo">
          <img src={logo} alt="logo" />
          <Link to="/">yMovies</Link>
        </div>
        <ul class="header__nav">
          {headerNav.map((h, i) => (
            <li key={i} className={`${i === activeIdx ? "active" : ""}`}>
              <Link to={h.path}>{h.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
