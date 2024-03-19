// InsightsSummaryChart.js
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { fetchMockData } from "./ApiService";

const InsightsSummaryChart = () => {
  const [insightsData, setInsightsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setInsightsData(data.insight_summary);
      } catch (error) {
        console.error("Error fetching insight summary data:", error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#0088FE", "#FF6347"]; // Colors for the pie chart slices

  if (!insightsData) {
    return <div>Loading...</div>; // Add loading state while fetching data
  }

  const chartData = [
    { name: "Successful Queries", value: insightsData.successful_queries },
    { name: "Failed Queries", value: insightsData.failed_queries },
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default InsightsSummaryChart;
