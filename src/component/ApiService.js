import data from "../data/mockData.json";

export const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful response
      resolve(data);
      reject(new Error("Fail to load data"));
    }, 1000); // Simulate delay of 1 second
  });
};
