import { useState } from "react";
import Error from "./Error";
import HomeDic from "./HomeDic";
import LoadingPage from "./LoadingPage";
import MainDic from "./MainDic";

const Dictionary = (props) => {
  const link = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [searchword, setSearchWord] = useState("");
  const [wordInfo, setWordInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (event) => {
    const target = event.target.value;
    setSearchWord(target);
  };
  const getWord = () => {
    setIsLoading(true);
    fetch(`${link}${searchword}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWordInfo(result);
        setIsLoading(false);
      });
    setSearchWord("");
  };
  const newWordInfo = wordInfo[0];
  let wordData;
  if (isLoading) {
    wordData = <LoadingPage />;
  } else if (wordInfo.length > 0) {
    wordData = <MainDic newWordInfo={newWordInfo} />;
  } else {
    if (wordInfo.title === "No Definitions Found") {
      wordData = <Error />;
    } else {
      wordData = <HomeDic />;
    }
  }

  return (
    <div style={{ display: props.showdic ? "block" : "none" }}>
      {wordData}
      <div className="searchbox">
        <input
          type="text"
          className="search"
          onChange={handleInputChange}
          placeholder="Search for a word"
          value={searchword}></input>
        <button className="bsea" onClick={getWord}>
          <i className="bx bx-search-alt-2" style={{ color: "white" }}></i>
        </button>
      </div>
      <p className="copyy">©2023 Manuel</p>
    </div>
  );
};

export default Dictionary;
