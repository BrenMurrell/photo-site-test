/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavItem } from "../NavItem";
import "./style.css";

interface Props {
  className: any;
  navItemDarkMode: boolean;
  navItemDarkMode1: boolean;
  navItemDarkMode2: boolean;
  navItemDarkMode3: boolean;
}

export const Nav = ({
  className,
  navItemDarkMode = true,
  navItemDarkMode1 = true,
  navItemDarkMode2 = true,
  navItemDarkMode3 = true,
}: Props): JSX.Element => {
  return (
    <div className={`nav ${className}`}>
      <NavItem darkMode={navItemDarkMode} text="Gallery" />
      <NavItem className="nav-item-instance" darkMode={navItemDarkMode1} text="About" />
      <NavItem className="design-component-instance-node" darkMode={navItemDarkMode2} text="Blog" />
      <NavItem className="nav-item-2" darkMode={navItemDarkMode3} text="Contact" />
    </div>
  );
};

Nav.propTypes = {
  navItemDarkMode: PropTypes.bool,
  navItemDarkMode1: PropTypes.bool,
  navItemDarkMode2: PropTypes.bool,
  navItemDarkMode3: PropTypes.bool,
};
