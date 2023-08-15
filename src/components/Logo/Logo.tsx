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
  divClassName: any;
}

export const Logo = ({ darkMode, className, divClassName }: Props): JSX.Element => {
  return (
    <div className={`logo ${className}`}>
      <div className={`div dark-mode-1-${darkMode} ${divClassName}`}>Bren Murrell</div>
    </div>
  );
};

Logo.propTypes = {
  darkMode: PropTypes.bool,
};
