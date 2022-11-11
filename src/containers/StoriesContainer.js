import React, { useEffect, useState } from "react";
import { getStoriesId } from "../services/HackerNewsStoriesApi";
import { getMultipleRandom } from "../utils/getMultipleRandom";
import Story from "../components/Story";
import "../styles/StoriesContainer.scss";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoriesId().then((data) => {
      const randomStories = getMultipleRandom(data);
      setStoryIds(randomStories);
    });
  }, []);

  return (
    <article
      className="stories"
      aria-labelledby="stories-section-header"
      id="stories-section"
    >
      <div className="stories__container">
        <ul className="stories__list">
          {storyIds.map((storyId) => (
            <Story key={storyId} id={storyId} />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default StoriesContainer;
