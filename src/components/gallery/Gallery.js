import React, { useState } from "react";
import { Element } from "react-scroll";
import GalleryComponent from "react-photo-gallery";
import Lightbox from "react-images";

import "./Gallery.css";

export default function Gallery() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const title = "Galería";

  const photos = [
    { src: require("../../assets/img/gallery/1.jpg"), width: 3, height: 3 },
    { src: require("../../assets/img/gallery/2.jpg"), width: 3, height: 3 },
    { src: require("../../assets/img/gallery/3.jpg"), width: 3, height: 4 },
    { src: require("../../assets/img/gallery/4.jpg"), width: 5, height: 4 },
    { src: require("../../assets/img/gallery/5.jpg"), width: 5, height: 4 },
    { src: require("../../assets/img/gallery/6.jpg"), width: 4, height: 3 },
    { src: require("../../assets/img/gallery/7.jpg"), width: 3, height: 4 },
    { src: require("../../assets/img/gallery/8.jpg"), width: 4, height: 3 },
    { src: require("../../assets/img/gallery/9.jpg"), width: 4, height: 3 },
    { src: require("../../assets/img/gallery/12.jpg"), width: 4, height: 3 },
    { src: require("../../assets/img/gallery/13.jpg"), width: 5, height: 4 }
  ];

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <Element name="gallery">
      <br />
      <div className="gallery text-center">
        <h1>{title}</h1>
        <div className="container">
          <GalleryComponent
            photos={photos}
            onClick={(event, obj) => openLightbox(event, obj)}
          />
          <Lightbox
            images={photos}
            onClose={() => closeLightbox()}
            onClickPrev={() => gotoPrevious()}
            onClickNext={() => gotoNext()}
            currentImage={currentImage}
            isOpen={lightboxIsOpen}
          />
        </div>
      </div>
    </Element>
  );
}
