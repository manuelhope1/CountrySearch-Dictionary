import React from "react";
import loading from "../images/loading1.gif";

const LoadingPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        {" "}
        <img
          src={loading}
          className="img-fluid"
          alt="map"
          style={{ height: "100px", width: "100px", margin: "20px 0" }}
        />
      </div>
      <p className="copyy">Searching....</p>
    </div>
  );
};

export default LoadingPage;
