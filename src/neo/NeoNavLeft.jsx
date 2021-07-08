// import { useState } from "react";
import { Link } from "react-router-dom";

const NeoNavLeft = ({ open = true, onClick }) => {
  return (
    <div className={open ? "left-menu active" : "left-menu"}>
      <div
        className={
          open
            ? "neo-leftnav--collapsible neo-slide neo-slide--in-left"
            : "neo-leftnav--collapsible neo-slide neo-slide--out-left"
        }
      >
        <div className="neo-leftnav--wrapper">
          <nav className="neo-leftnav">
            <ul className="neo-leftnav__nav" role="menu">
             

              <li className="neo-leftnav__main">
                <Link role="menuitem" tabIndex="1" to="/" onClick={onClick}>
                  Home
                </Link>
              </li>
              <li className="neo-leftnav__main">
                <Link role="menuitem" tabIndex="0" to="/buttons" onClick={onClick}>
                  Buttons
                </Link>
              </li>
              <li className="neo-leftnav__main">
                <Link role="menuitem" tabIndex="0" to="/tooltips" onClick={onClick}>
                  Tooltips
                </Link>
              </li>
              <li className="neo-leftnav__main">
                <Link role="menuitem" tabIndex="0" to="/icons" onClick={onClick}>
                  Icons
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NeoNavLeft;
