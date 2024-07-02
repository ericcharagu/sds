import React, { useRef, useState } from "react";
import { interiorData } from "./interiorData";
function Interior() {
  return (
    <div
      className="container-fluid"
      id="intDiv"
      style={{ backgroundColor: "" }}
    >
      <h1>Interior</h1>
      <div className="image-grid">
        {interiorData.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.image} alt={`image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interior;
