import React, { useEffect, useState } from "react";
import { getStories } from "../services/HackerNewsStoriesApi";
import Story from "../components/Story";
import "../styles/StoriesContainer.scss";

const StoriesContainer = ({ stories }) => {
  // const [stories, setStories] = useState([]);

  // useEffect(() => {
  //   getStories("top").then((data) => {
  //     setStories(data);
  //   });
  // }, []);

  console.log(stories);

  return (
    <article
      className="stories"
      aria-labelledby="stories-section-header"
      id="stories-section"
    >
      <div className="stories__container">
        <ul className="stories__list">
          {stories.map((id, i) => (
            <Story key={i} story={id} />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default StoriesContainer;
