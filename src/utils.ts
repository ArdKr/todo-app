// Create a random id
export const createId = () => {
  const minValue = 1;
  const maxValue = 2000;

  return Math.floor(Math.random() * maxValue) + minValue;
};
