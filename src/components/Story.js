import { useEffect, useState } from "react";
import img from "../assets/dummyImg.jpg";
import "../styles/Story.scss";
import { getUser } from "../services/HackerNewsStoriesApi";

const Story = ({ story }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(story.by).then((data) => {
      data && setUser(data);
    });
  }, []);
  return story ? (
    <>
      <li>
        <div className="story">
          <div className="story__image-section">
            <img src={img} alt={"a dummy img"}></img>
          </div>
          <div className="story__text-section">
            <h1> {story.title}</h1>
            <a href={story.url}> Read more</a>
            <p>time: {story.time}</p>
            <p>Score: {story.score}</p>
            <p>Author: {user.id}</p>
            <p>Author karma: {user.karma} </p>
          </div>
        </div>
      </li>
    </>
  ) : (
    <p>Upsy daisy</p>
  );
};

export default Story;
