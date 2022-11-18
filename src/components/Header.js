import React from "react";
import "../styles/Header.scss";
import img from "../assets/final.png";
import Menu from "./Menu";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "auto",
        height: "400px",
      }}
    >
      <h1> Hacker News </h1>
    </div>
  );
};

export default Header;
