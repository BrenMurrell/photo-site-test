import React from "react";
import { Headings } from "../../components/Headings";
import { Logo } from "../../components/Logo";
import { Nav } from "../../components/Nav";
import { PhotoGrid } from "../../components/PhotoGrid";
import { Thumbnail } from "../../components/Thumbnail";
import "./style.css";

export const DesktopLightMode = (): JSX.Element => {
  return (
    <div className="desktop-light-mode">
      <div className="div-2">
        <img
          className="bren-murrell"
          alt="Bren murrell"
          src="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/bren-murrell-5-1.png"
        />
        <div className="overlap-group">
          <Nav
            className="nav-instance"
            navItemDarkMode={false}
            navItemDarkMode1={false}
            navItemDarkMode2={false}
            navItemDarkMode3={false}
          />
          <Logo className="logo-instance" darkMode={false} divClassName="logo-2" />
        </div>
        <Headings className="headings-instance" darkMode={false} level="one" text="Welcome!" />
        <div className="homepage-gallery">
          <PhotoGrid
            className="photo-grid-instance"
            thumbnailImage="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-9@2x.png"
            thumbnailImage1="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-15@2x.png"
            thumbnailImage2="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-15@2x.png"
            thumbnailImage3="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-15@2x.png"
            thumbnailImage4="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-15@2x.png"
            thumbnailImg="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-15@2x.png"
          />
          <Headings className="headings-2" darkMode={false} level="two" text="Latest photos" />
        </div>
        <div className="element-grid">
          <Thumbnail
            className="thumbnail-instance"
            imageClassName="thumbnail-2"
            img="https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-10@2x.png"
            style="rounded"
          />
          <div className="frame">
            <Headings className="headings-3" darkMode={false} level="two" text="Latest photos" />
            <div className="paragraph">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="span">
                    Lorem ipsum dolor sit amet consectetur. Duis aliquam gravida eleifend ut arcu nulla. Varius at
                    integer nulla scelerisque justo praesent massa nisl. Ipsum in magna tempus facilisi id mauris risus
                    arcu etiam. Vulputate dapibus enim erat tellus lectus.
                    <br />
                  </span>
                </p>
                <p className="text-i">
                  <span className="span">
                    Duis aliquam gravida eleifend ut arcu nulla. Varius at integer nulla scelerisque justo praesent
                    massa nisl.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
