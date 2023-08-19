import React from "react";
import home from "../images/map1.gif";
const HomeCountry = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <img src={home} className="img-fluid" alt="map" />
      </div>
      <h3 className="errori">COUNTRY SEARCH </h3>
    </div>
  );
};

export default HomeCountry;
