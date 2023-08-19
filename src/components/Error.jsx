import React from "react";
import error from "../images/eroor.webp";

const Error = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <img src={error} className="img-fluid" alt="map" />
      </div>

      <h3 className="errori">WE COULDN'T FIND WHAT YOU WANT</h3>
    </div>
  );
};

export default Error;
