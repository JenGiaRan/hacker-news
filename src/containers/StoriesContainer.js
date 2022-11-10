import React, { useEffect, useState } from "react";
import { getStoriesId, getStories } from "../services/HackerNewsStoriesApi";
import { getMultipleRandom } from "../utils/getMultipleRandom";
import Story from "../components/Story";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStoriesId().then((data) => {
      const randomStories = getMultipleRandom(data);
      setStoryIds(randomStories);
    });
  }, []);

  return storyIds.map((storyId) => <Story key={storyId} id={storyId} />);
};

export default StoriesContainer;
