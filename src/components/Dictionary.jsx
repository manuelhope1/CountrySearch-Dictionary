import { useState } from "react";
import HomeDic from "./HomeDic";

const Dictionary = (props) => {
  const [searchword, setSearchWord] = useState("");
  let wordData = <HomeDic />;
  const handleInputChange = (event) => {
    const target = event.target.value;
    setSearchWord(target);
  };
  return (
    <div style={{ display: props.showdic ? "block" : "none" }}>
      {wordData}
      <div className="searchbox">
        <input
          type="text"
          className="search"
          onChange={handleInputChange}
          placeholder="Enter a country"
          value={searchword}></input>
        <button className="bsea">
          <i className="bx bx-search-alt-2" style={{ color: "white" }}></i>
        </button>
      </div>
      <p className="copyy">©2023 Manuel</p>
    </div>
  );
};

export default Dictionary;
