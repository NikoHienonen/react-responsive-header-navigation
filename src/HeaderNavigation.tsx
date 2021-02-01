import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import "./styles.css";

interface NavigationLink {
  path: string;
  text: string;
}

interface SocialLink extends NavigationLink {
  icon: string;
}

interface Props {
  logo: SVGElement | JSX.Element;
  menuLinks: NavigationLink[];
  socialLinks: SocialLink[];
}

const HeaderNavigation: React.FC<Props> = ({
  logo,
  menuLinks,
  socialLinks
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);
  const closeMenu = () => menuOpen && setMenuOpen(false);
  return (
    <div className="nav-container">
      <nav>
        <Link to={"/"} className="logo-link">
          {logo}
        </Link>
        <div className="menu-toggle" onClick={toggleMenuOpen}>
          <span className="horizontal-bar" />
          <span className="horizontal-bar" />
          <span className="horizontal-bar" />
        </div>
        <div
          onClick={closeMenu}
          className={`menu-container${menuOpen ? " open" : ""}`}
        >
          <div className="nav-menu">
            {menuLinks.map(({ path, text }) => (
              <NavLink
                key={`${path}-${text}`}
                to={path}
                className="nav-link"
                activeClassName="active"
              >
                {text}
              </NavLink>
            ))}
          </div>
          <div className="socials-menu">
            {socialLinks.map(({ path, text, icon }) => (
              <a href={path} key={text}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
