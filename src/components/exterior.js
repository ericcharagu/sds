import React from "react";
import { Card, Row, CardGroup, Col, Image } from "react-bootstrap";
import { projectData } from "./projectData";
import Slider from "react-slick";
import "./exterior.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./interior.css";

// import required modules
import { Pagination } from "swiper/modules";
function Exterior() {
  return (
    <div className="container-fluid" id="extDiv">
      <h1>Exterior</h1>{" "}
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {" "}
        {projectData.map((project, index) => (
          <>
            {" "}
            <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <p
                  style={{
                    fontSize: "60px",
                    textTransform: "uppercase",
                    margin: "auto",
                  }}
                >
                  {project.title}
                </p>
                <h5>{project.size} sqm</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project.image} alt="Card image" />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <div className="container-fluid">
        {/* <div className="row" id="extProjectInfo">
              <Col md={7}>
                <Card key={index}>
                  <Card.Img src={project.image} alt="Card image" />
                </Card>
              </Col>

              <Col md={5}>
                {" "}
                <h3>{project.title}</h3>
                <p>{project.size} sqm</p>
                <p style={{ margin: "auto" }}>{project.desc}</p>
              </Col>
            </div> */}
      </div>
    </div>
  );
}

export default Exterior;
