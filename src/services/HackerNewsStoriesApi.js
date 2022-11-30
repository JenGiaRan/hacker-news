import { getMultipleRandom } from "../utils/getMultipleRandom";
import { BASE_API_URL } from "../constants/constants";

const getStory = async (id) => {
  try {
    const story = await fetch(`${BASE_API_URL}/item/${id}.json`);
    return story.json();
  } catch (err) {
    throw Error(err);
  }
};

export const getStories = async (type) => {
  try {
    const storyIds = await fetch(`${BASE_API_URL}/${type}stories.json`);
    const data = await storyIds.json();

    // map through 10 random storyIds and give me the stories of those ids
    const stories = await Promise.all(getMultipleRandom(data).map(getStory));

    //sort stories in ascending order based on score and return sorted stories
    stories.sort((a, b) => a.score - b.score);
    return stories;
  } catch (err) {
    throw Error(err);
  }
};
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_API_URL}user/${userId}.json`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};
