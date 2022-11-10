// Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
// • Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
// • User: https://hacker-news.firebaseio.com/v0/user/${id}.json
// • API documentation: https://github.com/HackerNews/API

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

//TODO: doboule check the try and fetch async

// Fetch all the stories id from the 'top stories' endpoint
export const getStoriesId = async () => {
  try {
    const response = await fetch(topStoriesUrl);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

// Fetch all stories
export const getStories = async (storyId) => {
  try {
    const response = await fetch(`${storyUrl}${storyId}.json`);
    return response.json();
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
