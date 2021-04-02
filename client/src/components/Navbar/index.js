import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cls from 'classnames';

import './style.scss';

import HamburgerIcon from './../HamburgerIcon/index';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {};

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            LOGO
          </Link>
        </div>
        <div className="hamburger-icon" onClick={handleHamburgerClick}>
          {<HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        <ul className={cls('nav-menu', isOpen && 'active')}>
          <li className="nav-item">
            <NavLink
              to="/profile"
              exact
              className="nav-link"
              activeClassName="active-menu"
              onClick={closeMobileMenu}
            >
              User Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/playground"
              exact
              className="nav-link"
              activeClassName="active-menu"
              onClick={closeMobileMenu}
            >
              Playground
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/lessons"
              exact
              className="nav-link"
              activeClassName="active-menu"
              onClick={closeMobileMenu}
            >
              Lessons
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
