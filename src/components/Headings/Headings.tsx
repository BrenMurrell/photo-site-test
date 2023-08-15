/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  darkMode: boolean;
  level: "two" | "one";
  className: any;
  text: string;
}

export const Headings = ({ darkMode, level, className, text = "Latest photos" }: Props): JSX.Element => {
  return (
    <div className={`headings ${level} ${className}`}>
      <div className={`latest-photos dark-mode-2-${darkMode} level-${level}`}>{text}</div>
    </div>
  );
};

Headings.propTypes = {
  darkMode: PropTypes.bool,
  level: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
};
