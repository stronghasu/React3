import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <div className="header__port">
        <Link to="/portfolio">portfoilo</Link>
      </div>
      <div className="header__logo">
        <Link to="/">YunHarry</Link>
      </div>
      <nav className="header__menu">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Refer</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/Movie">Movie</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
