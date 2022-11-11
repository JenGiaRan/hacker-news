import React, { useEffect, useState } from "react";
import { getStories, getUser } from "../services/HackerNewsStoriesApi";
import Author from "./Author";
import "../styles/Story.scss";

const Story = (props) => {
  const [story, setStory] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    getStories(props.id).then((data) => data && setStory(data));
    getUser(story.by).then((data) => data && setUser(data));
  }, []);

  return story ? (
    <>
      <li>
        <div className="story">
          <div className="story__text-section">
            <h1> {story.title}</h1>
            <a href={story.url}> Read more</a>
            <p>time: {story.time}</p>
            <p>Score: {story.score}</p>
            <p>Author: {story.by}</p>
            <p>Author info: </p>
            <Author user={story.by} />
          </div>
        </div>
      </li>
    </>
  ) : (
    <p>Upsy daisy</p>
  );
};

export default Story;
