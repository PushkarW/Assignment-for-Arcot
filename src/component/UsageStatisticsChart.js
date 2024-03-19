// UsageStatisticsChart.js
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchMockData } from "./ApiService";

const UsageStatisticsChart = () => {
  const [usageStatisticsData, setUsageStatisticsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setUsageStatisticsData(data.usage_statistics);
      } catch (error) {
        console.error("Error fetching usage statistics data:", error);
      }
    };

    fetchData();
  }, []);

  if (!usageStatisticsData) {
    return <div>Loading...</div>; // Add loading state while fetching data
  }

  const { by_platform, by_country } = usageStatisticsData;

  const platformData = Object.entries(by_platform).map(([platform, count]) => ({
    platform,
    count,
  }));

  const countryData = Object.entries(by_country).map(([country, count]) => ({
    country,
    count,
  }));

  return (
    <div>
      <h3>Usage Statistics by Platform</h3>
      <BarChart width={600} height={300} data={platformData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="platform" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="var(--color-second)" />
      </BarChart>

      <h3>Usage Statistics by Country</h3>
      <BarChart width={600} height={300} data={countryData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="var(--color-primary)" />
      </BarChart>
    </div>
  );
};

export default UsageStatisticsChart;
