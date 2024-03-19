// apiService.js

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

export const fetchInsightSummaryData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful response
      if (data.insight_summary) {
        resolve(data.insight_summary);
      } else {
        reject(new Error("Failed to fetch insight summary data"));
      }
    }, 1000); // Simulate delay of 1 second
  });
};
