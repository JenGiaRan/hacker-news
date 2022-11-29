import { lazy, useEffect, useState } from "react";
import img from "../assets/book.jpg";
import "../styles/Story.scss";
import { getUser } from "../services/HackerNewsStoriesApi";
import { getDate } from "../utils/getDate.js";
import { scoreSvg, authorSvg, karmaSvg } from "../assets/svg";

const Story = ({ story }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(story.by).then((data) => {
      data && setUser(data);
    });
  }, [story]);
  return story ? (
    <>
      <div className="story">
        <div className="story__image-section">
          <img
            src={img}
            style={{ width: "5rem", textAlign: "center" }}
            alt={"a dummy img"}
            loading={"lazy"}
          ></img>
        </div>
        <div className="story__text-section">
          <h1>
            <a href={story.url}> {story.title}</a>
          </h1>
          <div className="story__info">
            <p>{getDate(story.time)}</p>
            <p>
              {scoreSvg}
              {story.score}
            </p>
          </div>
          <div className="story__info">
            <p>
              {authorSvg} {user.id}
            </p>
            <p>
              {karmaSvg} {user.karma}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>Upsy daisy</p>
  );
};

export default Story;
