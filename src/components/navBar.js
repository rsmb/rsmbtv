import { Link } from "gatsby";
import * as React from "react";
import { navLinks, navLinkItem, navLinkText } from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            rsmb.tv
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
