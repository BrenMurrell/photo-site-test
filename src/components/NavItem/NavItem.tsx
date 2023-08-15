/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  darkMode: boolean;
  className: any;
  text: string;
}

export const NavItem = ({ darkMode, className, text = "Gallery" }: Props): JSX.Element => {
  return (
    <div className={`nav-item dark-mode-${darkMode} ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

NavItem.propTypes = {
  darkMode: PropTypes.bool,
  text: PropTypes.string,
};
