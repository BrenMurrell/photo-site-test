/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  style: "rounded" | "default";
  image: string;
  className: any;
  imageClassName: any;
  img: string;
}

export const Thumbnail = ({
  style,
  image = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
  className,
  imageClassName,
  img = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-2@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`thumbnail ${className}`}>
      <img className={`image ${imageClassName}`} alt="Image" src={style === "rounded" ? img : image} />
    </div>
  );
};

Thumbnail.propTypes = {
  style: PropTypes.oneOf(["rounded", "default"]),
  image: PropTypes.string,
  img: PropTypes.string,
};
