import React, { useEffect, useState } from "react";
import { getStories } from "../services/HackerNewsStoriesApi";
import StoriesContainer from "../containers/StoriesContainer";
import "../styles/Menu.scss";

const Menu = () => {
  const [type, setType] = useState("top");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(type).then((data) => {
      data && setStories(data);
      console.log(type);
    });
  }, [type]);
  return (
    <>
      <div className="content">
        <h1 className="header"> Hacker News </h1>
        <div className="menu">
          <button
            aria-label="top stories"
            className="tablink"
            id="Top"
            style={{ backgroundColor: type === "top" ? "#777" : "" }}
            onClick={() => {
              setType("top");
            }}
          >
            TOP
          </button>
          <button
            aria-label="new stories"
            className="tablink"
            style={{ backgroundColor: type === "new" ? "#777" : "" }}
            onClick={() => {
              setType("new");
            }}
          >
            NEW
          </button>
          <button
            aria-label="best stories"
            className="tablink"
            style={{ backgroundColor: type === "best" ? "#777" : "" }}
            onClick={() => {
              setType("best");
            }}
          >
            BEST
          </button>
        </div>
      </div>
      <StoriesContainer stories={stories}></StoriesContainer>
    </>
  );
};

export default Menu;
