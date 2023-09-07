import React, { useLayoutEffect, useState } from "react";

import clsx from "clsx";
import { headerNav } from "../constants";

const clamp = (value) => Math.max(0, value);
const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;
const useScrollspy = (headerNav, offset) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = headerNav
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [headerNav, offset]);

  return activeId;
};

const Header = () => {
  const [show, setShow] = useState(false);
  const activeId = useScrollspy(headerNav, 54);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">portfolio</a>
        </div>
        {/* <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav> */}
        <nav className="header__nav">
          <ul className="menu">
            {headerNav.map((id) => (
              <li key={`menu-item-${id}`} className="menu-item">
                <a
                  href={`#${id}`}
                  className={clsx(
                    "menu-link",
                    id === activeId && "menu-link-active"
                  )}
                >
                  {capitalize(id)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
