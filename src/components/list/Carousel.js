import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/brand/darkshot-logo.png";
const Carousel = ({ items, transitionSpeed }) => {
  const [title, setTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [anotherImage, setAnotherImage] = useState("");

  useEffect(() => {
    const carouselTitle = document.querySelector("#carouselTitle");
    const carouselImages = document.querySelectorAll(".carousel-image");
    carouselImages.forEach((image) => {
      image.style.backgroundColor = "#9C9999";
      image.style.height = "250px";
      image.style.width = "180px";
    });
    const firstImage = document.querySelector(".carousel-image:nth-child(1)");
    firstImage.style.marginTop = "30px";

    const handleCarouselLoop = () => {
      let count = 0;
      let totalItems = items.length;

      setInterval(() => {
        count >= totalItems ? (count = 1) : count++;
        setTitle(items[count - 1].name);
        setNewImage(items[count - 1].image.firstImage);
        setAnotherImage(items[count - 1].image.secondImage);
        carouselTitle.setAttribute("carousel-index", "0" + count);
      }, transitionSpeed);
    };

    handleCarouselLoop();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1 id="carouselTitle" carousel-index="" style={{ color: "white" }}>
          {title}
        </h1>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-3 px-3">
          <img
            src={
              newImage == ""
                ? ""
                : require(`../../assets/images/services/${newImage}`)
            }
            alt={newImage}
            className="carousel-image"
          />
        </div>
        <div className="col-3 px-3">
          <img
            src={
              anotherImage == ""
                ? ""
                : require(`../../assets/images/services/${anotherImage}`)
            }
            alt={anotherImage}
            className="carousel-image"
          />
        </div>
      </div>
    </>
  );
};
export default Carousel;
