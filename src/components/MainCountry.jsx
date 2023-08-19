import React from "react";

const MainCountry = (props) => {
  let newCountryInfo = props.newCountryInfo;
  return (
    <div>
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={newCountryInfo.flags.svg}
          className="img-fluid imgflag"
          alt="country"></img>
      </div>
      <div>
        {" "}
        <h3 className="cname">{newCountryInfo.name.common}</h3>
        <div className="info-wrap">
          <h5>
            Continent<i class="bx bx-world"></i>:
          </h5>
          <span className="dinfo">{newCountryInfo.continents}</span>
        </div>
        <div className="info-wrap">
          <h5>
            Region<i class="bx bx-location-plus"></i>:
          </h5>
          <span className="dinfo">{newCountryInfo.subregion}</span>
        </div>
        <div className="info-wrap">
          <h5>
            Capital<i class="bx bxs-location-plus"></i>:
          </h5>
          <span className="dinfo">{newCountryInfo.capital[0]}</span>
        </div>
        <div className="info-wrap">
          <h5>
            Area Size <i class="bx bx-current-location"></i>:
          </h5>
          <span className="dinfo">{newCountryInfo.area}km²</span>
        </div>
        <div className="info-wrap">
          <h5>
            Population<i class="bx bx-user"></i>:
          </h5>
          <span className="dinfo">{newCountryInfo.population}</span>
        </div>
        <div className="info-wrap">
          <h5>
            Currency<i class="bx bxs-bank"></i>:
          </h5>
          <span className="dinfo">
            {
              newCountryInfo.currencies[Object.keys(newCountryInfo.currencies)]
                .name
            }
          </span>
        </div>
        <div className="info-wrap">
          <h5>
            Language<i class="bx bxs-chat"></i>:
          </h5>
          <span className="dinfo">
            {Object.values(newCountryInfo.languages)
              .toString()
              .split(",")
              .join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainCountry;
