import React from "react";
import landingImage from "../../../assets/images/brand/cinema_bg.png";
const Index = () => {
  const landingContent = {
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "10%",
    backgroundImage:
      "url(" + require("../../../assets/images/brand/cinema_bg.png") + ")",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className="row align-items-center" style={landingContent}>
      <div className="col-7">
        <h1
          className="text-white text-uppercase"
          style={{ fontFamily: "Agdasima-Bold", fontSize: "72px" }}
        >
          Where dreams become
        </h1>
        <h1
          className="text-white text-uppercase pb-3"
          style={{ fontFamily: "Agdasima-Bold", fontSize: "72px" }}
        >
          Cinematic Masterpieces.
        </h1>
        <a
          className="btn btn-light text-uppercase text-decoration-none rounded-0"
          style={{ fontFamily: "Agdasima-Bold" }}
        >
          Inquire Now
        </a>
        <a
          className="btn border-white text-white text-uppercase text-decoration-none ms-2 rounded-0"
          style={{ fontFamily: "Agdasima-Bold" }}
        >
          Learn more
        </a>
      </div>
      <hr
        style={{
          height: "200px",
          opacity: 1,
          background: "linear-gradient(rgb(60, 60, 60, 0), #151515)",
          position: "absolute",
          border: 0,
          bottom: 0,
          left: 0,
          margin: 0,
        }}
      ></hr>
    </div>
  );
};
export default Index;
