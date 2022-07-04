export const groupFunction = (arr) => {
  return arr.reduce((acc, value, index) => {
    if (index % 2 === 0) {
      acc.push([value]);
    } else {
      acc[acc.length - 1][1] = value;
    }

    return acc;
  }, []);
};
