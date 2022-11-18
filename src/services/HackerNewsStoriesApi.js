// Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
// • Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
// • User: https://hacker-news.firebaseio.com/v0/user/${id}.json
// • API documentation: https://github.com/HackerNews/API
import { getMultipleRandom } from "../utils/getMultipleRandom";
export const BASE_API_URL = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesUrl = `${BASE_API_URL}/topstories.json`;
export const storyUrl = `${BASE_API_URL}item/`;
export const userUrl = `${BASE_API_URL}user/`;

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
    const stories = await Promise.all(getMultipleRandom(data).map(getStory));
    stories.sort((a, b) => a.score - b.score);
    return stories;
  } catch (err) {
    throw Error(err);
  }
};
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${userUrl}${userId}.json`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};
