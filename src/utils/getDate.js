export const getDate = (timestamp) => {
  const time = new Date(timestamp);
  return time.toUTCString();
};
