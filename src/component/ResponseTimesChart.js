import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchMockData } from "./ApiService";

const ResponseTimesChart = () => {
  const [responseTimesData, setResponseTimesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setResponseTimesData(data.response_times);
      } catch (error) {
        console.error("Error fetching response times data:", error);
      }
    };

    fetchData();
  }, []);

  if (!responseTimesData) {
    return <div>Loading...</div>; // Add loading state while fetching data
  }

  const { day_wise, week_wise } = responseTimesData;

  const dayData = day_wise.map(({ date, average_time }) => ({
    date,
    "Daily Average Time": average_time,
  }));

  const weekData = week_wise.map(({ week, average_time }) => ({
    week,
    "Weekly Average Time": average_time,
  }));

  return (
    <div>
      <h3>Daily Response Time</h3>
      <LineChart width={600} height={300} data={dayData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Daily Average Time"
          stroke="var(--color-second)"
        />
      </LineChart>

      <h3>Weekly Response Time</h3>
      <LineChart width={600} height={300} data={weekData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Weekly Average Time"
          stroke="var(--color-primary)"
        />
      </LineChart>
    </div>
  );
};

export default ResponseTimesChart;
