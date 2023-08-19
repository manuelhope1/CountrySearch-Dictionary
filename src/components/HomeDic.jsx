import React from "react";
import home from "../images/dic.gif";

const HomeDic = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <img src={home} className="img-fluid" alt="map" />
      </div>
      <h3 className="errori">DICTONARY </h3>
    </div>
  );
};

export default HomeDic;
