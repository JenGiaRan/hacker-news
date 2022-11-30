// Return a date from the timestamp using UTC(Universal Coordinated Time)
export const getDate = (timestamp) => {
  const time = new Date(timestamp);
  return time.toUTCString();
};
