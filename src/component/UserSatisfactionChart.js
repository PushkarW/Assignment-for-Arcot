// UserSatisfactionChart.js
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { fetchMockData } from "./ApiService";
import "./DesignForAll/UserSatisfactionChart.css";

const UserSatisfactionChart = () => {
  const [userSatisfactionData, setUserSatisfactionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setUserSatisfactionData(data.user_satisfaction);
      } catch (error) {
        console.error("Error fetching user satisfaction data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userSatisfactionData) {
    return <div>Loading...</div>; // Add loading state while fetching data
  }

  const ratingsData = userSatisfactionData.ratings.map(({ rating, count }) => ({
    rating,
    count,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4500"];

  const renderTooltip = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const rating = payload[0].payload.rating;
      const count = payload[0].value;
      return (
        <div className="custom-tooltip ">
          <p className="label">{`${rating} Star Rating`}</p>
          <p className="value">{`Count: ${count}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={ratingsData}
        dataKey="count"
        nameKey="rating"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {ratingsData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={renderTooltip} />
      <h3>Ratings</h3>
      <Legend />
    </PieChart>
  );
};

export default UserSatisfactionChart;
