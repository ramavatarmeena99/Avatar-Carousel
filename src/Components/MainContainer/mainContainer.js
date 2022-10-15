import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Name } from "../Data";
import "./index.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function MainContainer() {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    row: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: 20 }}>
        <button
          style={{ width: "70px", height: "30px", cursor: "pointer" }}
          onClick={() => slider?.current?.slickPrev()}
        >
          Prev
        </button>
        <button
          style={{
            marginLeft: 20,
            width: "70px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={() => slider?.current?.slickNext()}
        >
         Next
        </button>
      </div>
      <Slider
        style={{
          width: "90%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
        ref={slider}
        {...settings}
      >
        {Name.map((i, index) => {
          return (
            <div key={index}>
              <p style={{ color: "red" }}>{i.code}</p>
              <div
                style={{
                  width: "410px",
                  height: "auto",
                  border: "1px solid red",
                  margin: "5px",


                  borderRadius: "5px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",

                    // border: "1px solid red",
                  }}
                  src={i?.img}
                  alt="React Slick"
                ></img>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
