// Get 10 random items from an array
export const getMultipleRandom = (arr) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  console.log(shuffled.slice(0, 10));
  return shuffled.slice(0, 10);
};
