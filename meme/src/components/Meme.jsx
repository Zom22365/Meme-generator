import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  const [texts, setTexts] = React.useState({
    topText: "",
    bottomText: "",
  });

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTexts({
      ...texts,
      [e.target.name]: value,
    });
  };

  return (
    <main>
      <div className="form">
        <div className="block__input">
          <input
            type="text"
            placeholder="Top text"
            className="form__input"
            name="topText"
            value={texts.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form__input"
            name="bottomText"
            value={texts.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form__button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="block__image">
        <h1 className="text text__top">{texts.topText}</h1>
        <img src={memeImage} className="meme__image" />
        <h1 className="text text__bottom">{texts.bottomText}</h1>
      </div>
    </main>
  );
}
