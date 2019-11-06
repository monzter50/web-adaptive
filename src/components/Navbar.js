import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <nav className="navbar theme--primary ">
      <div className="flex items-center border-r border-white-500">
        <span className="font-semibold text-xl tracking-tight">
          Tailwind CSS
        </span>
      </div>

      <ul className="navbar__collapse">
        <li className="navbar__item border-r border-white-500">
          <a className="navbar__link" href="#">
            <FontAwesomeIcon icon="user" />
          </a>
        </li>
        <li className="navbar__item border-r border-white-500">
          <a className="navbar__link" href="#">
            <FontAwesomeIcon icon="phone" />
          </a>
        </li>
        <li className="navbar__item border-r border-white-500">
          <a className="navbar__link" href="#">
            <FontAwesomeIcon icon="shopping-cart" />
          </a>
        </li>
        <li className="navbar__item border-r border-white-500">
          <a className="navbar__link" href="#">
            <FontAwesomeIcon icon="globe" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
