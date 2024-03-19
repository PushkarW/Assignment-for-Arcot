import React, { useEffect, useState } from "react";
import "./DesignForAll/CategoryDistributionChart.css";

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

const CategoryDistributionChart = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setCategoryData(
          Object.entries(data.category_distribution).map(
            ([category, count]) => ({ category, count })
          )
        );
      } catch (error) {
        console.error("Error fetching category distribution data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="head">this is to check responsiveness</h1>
      <BarChart
        className="barContainer"
        width={800}
        height={500}
        data={categoryData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        ;
        <Bar dataKey="count" fill="var(--color-second)" />
      </BarChart>
    </div>
  );
};

export default CategoryDistributionChart;
