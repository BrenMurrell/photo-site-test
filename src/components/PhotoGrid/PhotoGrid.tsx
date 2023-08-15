/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Thumbnail } from "../Thumbnail";
import "./style.css";

interface Props {
  className: any;
  thumbnailImage: string;
  thumbnailImg: string;
  thumbnailImage1: string;
  thumbnailImage2: string;
  thumbnailImage3: string;
  thumbnailImage4: string;
}

export const PhotoGrid = ({
  className,
  thumbnailImage = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-3@2x.png",
  thumbnailImg = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
  thumbnailImage1 = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
  thumbnailImage2 = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
  thumbnailImage3 = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
  thumbnailImage4 = "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`photo-grid ${className}`}>
      <Thumbnail image={thumbnailImage} style="default" />
      <Thumbnail image={thumbnailImg} style="default" />
      <Thumbnail image={thumbnailImage1} style="default" />
      <Thumbnail image={thumbnailImage2} style="default" />
      <Thumbnail image={thumbnailImage3} style="default" />
      <Thumbnail image={thumbnailImage4} style="default" />
    </div>
  );
};

PhotoGrid.propTypes = {
  thumbnailImage: PropTypes.string,
  thumbnailImg: PropTypes.string,
  thumbnailImage1: PropTypes.string,
  thumbnailImage2: PropTypes.string,
  thumbnailImage3: PropTypes.string,
  thumbnailImage4: PropTypes.string,
};
