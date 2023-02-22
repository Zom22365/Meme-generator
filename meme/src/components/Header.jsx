import React from "react";
import Logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header__logo" />
      <h2 className="header__title">Meme Generator</h2>
      <h4 className="header__project">React Course - Project 3</h4>
    </header>
  );
}
