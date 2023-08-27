import React from "react";

const MainDic = (props) => {
  let newWordInfo = props.newWordInfo;
  let audioUrl = newWordInfo.phonetics[0].audio;

  const playSound = () => {
    const audioPlayer = new Audio(audioUrl);
    audioPlayer.play();
  };

  return (
    <div>
      <div className="wordinfo">
        <h3>{newWordInfo.word}</h3>
        <button className="talk" onClick={playSound}>
          <i className="bx bxs-volume-full"></i>
        </button>
      </div>
      <div className="details">
        <p>{newWordInfo.meanings[0].partOfSpeech}</p>
        <p>{newWordInfo.phonetic}</p>
      </div>
      <div className="worddoc">
        {" "}
        <p className="w-mean">
          {newWordInfo.meanings[0].definitions[0].definition}
        </p>
        <p className="w-example">
          {newWordInfo.meanings[0].definitions[0].example}
        </p>
      </div>
    </div>
  );
};

export default MainDic;
