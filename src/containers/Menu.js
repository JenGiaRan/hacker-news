import React, { useEffect, useState } from "react";
import { getStories } from "../services/HackerNewsStoriesApi";
import StoriesContainer from "../containers/StoriesContainer";
import "../styles/Menu.scss";
import LoadingSpinner from "../components/LoadingSpinner";

const Menu = () => {
  const [type, setType] = useState("top");
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  const names = [{ name: "top" }, { name: "best" }, { name: "new" }];

  useEffect(() => {
    setLoading(true);
    getStories(type).then((data) => {
      data && setStories(data);
      setLoading(false);
    });
  }, [type]);
  return (
    <header>
      <div className="content">
        <h1 className="header"> Hacker News </h1>
        <div className="menu">
          {names.map((item) => (
            <button
              aria-label={`${item.name} stories`}
              className="tablink"
              id={item.name}
              key={item.name}
              style={{ backgroundColor: type === item.name ? "#777" : "" }}
              onClick={() => {
                setType(item.name);
              }}
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <StoriesContainer stories={stories}></StoriesContainer>
      )}
    </header>
  );
};

export default Menu;
