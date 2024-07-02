import React from "react";
import "./cover.css";
import coverPhoto from "../img/dw.png";
import About from "./about";
import Exterior from "./exterior";
import Interior from "./interior";
import Energy from "./energy";
import QuoteGen from "./quote";
import Footer from "./footer";
function Cover() {
  return (
    <div className="container-fluid" id="coverDiv">
      <div
        className="container-fluid"
        id="homeCover"
        style={{
          backgroundImage: "url(" + coverPhoto + ")",
        }}
      />
      <div
        className="container-fluid"
        style={{ margin: "auto", paddingTop: "19px" }}
      >
        <About />
      </div>
      <div className="container-fluid">
        <Exterior />
      </div>
      <div className="container-fluid" style={{ marginTop: "5em" }}>
        <Interior />
      </div>
      <div className="container-fluid">
        <Energy />
      </div>

      <div className="container-fluid">
        <QuoteGen />
      </div>

      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default Cover;
