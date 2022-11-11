import React from "react";
import StoriesContainer from "./containers/StoriesContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <StoriesContainer />
      <Footer />
    </>
  );
};

export default App;
