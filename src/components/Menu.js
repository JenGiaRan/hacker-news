import React, { useEffect, useState } from "react";
import { getStories } from "../services/HackerNewsStoriesApi";
import StoriesContainer from "../containers/StoriesContainer";
import "../styles/Menu.scss";
import LoadingSpinner from "./LoadingSpinner";

const Menu = () => {
  const [type, setType] = useState("top");
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  console.log(type);
  useEffect(() => {
    setLoading(true);
    getStories(type).then((data) => {
      data && setStories(data);
      setLoading(false);
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <StoriesContainer stories={stories}></StoriesContainer>
      )}
    </>
  );
};

export default Menu;
