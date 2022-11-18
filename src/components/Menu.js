import React, { useEffect, useState } from "react";
import { getStories } from "../services/HackerNewsStoriesApi";
import StoriesContainer from "../containers/StoriesContainer";
import "../styles/Menu.scss";

const Menu = () => {
  const [type, setType] = useState("top");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStories(type).then((data) => {
      data && setStories(data);
      console.log(type);
      setIsLoading(false);
    });
  }, [type]);
  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <>
      <div className="menu">
        <button
          onClick={() => {
            setIsLoading(true);
            setType("top");
          }}
        >
          Top
        </button>
        <button
          onClick={() => {
            setIsLoading(true);
            setType("new");
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            setIsLoading(true);
            setType("best");
          }}
        >
          Best
        </button>
      </div>
      <StoriesContainer stories={stories}></StoriesContainer>
    </>
  );
};

export default Menu;
