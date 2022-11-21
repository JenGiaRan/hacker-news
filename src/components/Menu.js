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
            className="tablink"
            id="Top"
            onClick={() => {
              setType("top");
            }}
          >
            TOP
          </button>
          <button
            className="tablink"
            onClick={() => {
              setType("new");
            }}
          >
            NEW
          </button>
          <button
            className="tablink"
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
