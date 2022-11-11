import React, { useEffect, useState } from "react";
import { getUser } from "../services/HackerNewsStoriesApi";
import img from "../assets/dummyImg.jpg";

const Author = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(props.user).then((data) => data && setUser(data));
  }, []);

  return user ? (
    <>
      <p>Author id: {user.id}</p>
      <p> Karma score: {user.karma}</p>
      <img src={img} alt={"a dummy img"}></img>
    </>
  ) : (
    <p>Upsy daisy</p>
  );
};

export default Author;
