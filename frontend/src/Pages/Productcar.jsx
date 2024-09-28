import React from "react";
import img1 from "../Photos/wm1.jpg";
import img2 from "../Photos/wm2.jpg";
import img3 from "../Photos/wm3.jpg";
import img4 from "../Photos/wm4.jpg";
import img5 from "../Photos/cww.jpg";
import img6 from "../Photos/men1.jpg";
import img7 from "../Photos/men2.jpg";
import img8 from "../Photos/ccm.jpg";
import img9 from "../Photos/men4.jpg";

import img10 from "../Photos/men5.jpg";
import img11 from "../Photos/kid1.jpg";
import img12 from "../Photos/ckid1.jpg";
import img13 from "../Photos/ckid2.jpg";
import img14 from "../Photos/ckid3.jpg";
import img15 from "../Photos/kid5.jpg";
//import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'slick-carousel/slick/slick.css';
import "./Productcar.css";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

<>
  <>
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
    crossorigin="anonymous"
  ></link>
</>;

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export const Productcar = () => {
  var settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className="container">
      <Box m={"50px"} bg="red" color={"white"}>
        <h1>PRODUCT</h1>
      </Box>
      <>
        <br />
        <Box m={"30px"} width="300px" >
          <Heading bg="red" color="white">
            <Link to="/Men" style={{ textDecoration: "none", color: "white" }}>
              MAN
            </Link>
          </Heading>
        </Box>
        <Box className="men">
          <Slider {...settings}>
            <div className="car">
              <img src={img6} alt="" />
              <div className="card-body">
                <h3>Men White Polo </h3>
              </div>
            </div>
            <div className="car">
              <img src={img7} alt="" />
              <div className="card-body">
                <h3>Blue Heavily Washed Jean</h3>
              </div>
            </div>
            <div className="car">
              <img src={img8} alt="" />
              <div className="card-body">
                <h3>Slim Fit Green Jeans </h3>
              </div>
            </div>
            <div className="car">
              <img src={img9} alt="" />
              <div className="card-body">
                <h3>Relaxed Pink T-shirt</h3>
              </div>
            </div>
            <div className="car">
              <img src={img10} alt="" />
              <div className="card-body">
                <h3>White T-shirt</h3>
              </div>
            </div>
          </Slider>
        </Box>
      </>
      {/*women */}

      <>
        <Box m={"30px"} width="300px" >
          <Heading bg="red" color="white">
            <Link
              to="/Women"
              style={{ textDecoration: "none", color: "white" }}
            >
              WOMEN
            </Link>
          </Heading>
        </Box>
        <Box className="women">
          <Slider {...settings}>
            <div className="car">
              <img src={img1} alt="" />
              <div className="card-body">
                <h3>Bootcut Fit Woman top </h3>
              </div>
            </div>
            <div className="car">
              <img src={img2} alt="" />
              <div className="card-body">
                <h3>Fit Woman jeans </h3>
              </div>
            </div>
            <div className="car">
              <img src={img3} alt="" />
              <div className="card-body">
                <br />
                <h3>Bootcut Fit Woman </h3>
              </div>
            </div>
            <div className="car">
              <img src={img4} alt="" />
              <div className="card-body">
                <h3>D-Ebbey Fit Woman Shirt </h3>
              </div>
            </div>
            <div className="car">
              <img src={img5} alt="" />
              <div className="card-body">
                <h3>D-Ebbey Formal Shirt Woman </h3>
              </div>
            </div>
          </Slider>
        </Box>
      </>

      {/*Kid */}
      <Box m={"30px"} width="300px" >
        <Heading bg="red" color="white">
          <Link to="/Kid" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            KID
          </Link>
        </Heading>
      </Box>
      <Box className="kid">
        <Slider {...settings}>
          <div className="car">
            <img src={img11} alt="" />
            <div className="card-body">
              <text fontWeight={"bold"}>CAP </text>
            </div>
          </div>
          <div className="car">
            <img src={img12} alt="" />
            <div className="card-body">
              <h3>Boys Black </h3>
            </div>
          </div>
          <div className="car">
            <img src={img13} alt="" />
            <div className="card-body">
              <h3>Regular Fit Boys Black Shirt</h3>
            </div>
          </div>
          <div className="car">
            <img src={img14} alt="" />
            <div className="card-body">
              <h3>Pcrown Unisex Black Shorts </h3>
            </div>
          </div>
          <div className="car">
            <img src={img15} alt="" />
            <div className="card-body">
              <h3> Small Kid-Tshirt</h3>
            </div>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default Productcar;
