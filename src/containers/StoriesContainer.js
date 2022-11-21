import Story from "../components/Story";
import "../styles/StoriesContainer.scss";

const StoriesContainer = ({ stories }) => {
  return (
    <article
      className="stories"
      aria-labelledby="stories-section-header"
      id="stories-section"
    >
      <div className="stories__container">
        {stories.map((id, i) => (
          <Story key={i} story={id} />
        ))}
      </div>
    </article>
  );
};

export default StoriesContainer;
