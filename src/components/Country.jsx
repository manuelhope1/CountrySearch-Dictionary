import { useState } from "react";
import Error from "./Error";
import HomeCountry from "./HomeCountry";
import LoadingPage from "./LoadingPage";
import MainCountry from "./MainCountry";

const Country = (props) => {
  const [searchword, setSearchWord] = useState("");
  const [countryInfo, setCountryInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (event) => {
    const target = event.target.value;
    setSearchWord(target);
  };
  const getCountry = () => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${searchword}?fullText=true`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCountryInfo(result);
        setIsLoading(false);
      });
    setSearchWord("");
  };
  const newCountryInfo = countryInfo[0];
  let countryData;
  if (isLoading) {
    countryData = <LoadingPage />;
  } else if (countryInfo.length > 0) {
    countryData = <MainCountry newCountryInfo={newCountryInfo} />;
  } else {
    if (countryInfo.status === 404) {
      countryData = <Error />;
    } else {
      countryData = <HomeCountry />;
    }
  }
  return (
    <div style={{ display: props.showcoun ? "block" : "none" }}>
      {countryData}
      <div className="searchbox">
        <input
          type="text"
          className="search"
          onChange={handleInputChange}
          placeholder="Enter a country"
          value={searchword}></input>
        <button className="bsea" onClick={getCountry}>
          <i className="bx bx-search-alt-2" style={{ color: "white" }}></i>
        </button>
      </div>
      <p className="copyy">©2023 Manuel</p>
    </div>
  );
};

export default Country;
