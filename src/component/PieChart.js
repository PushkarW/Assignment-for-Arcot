// // please install npm install react-apexcharts apexcharts
// import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";

// const Piechart = () => {
//   const [stdudentSubject, setStudentsubject] = useState([]);
//   const [studentMarks, setStudentMarks] = useState([]);

//   useEffect(() => {
//     const sSubject = [];
//     const sMarks = [];
//     const getStudentdata = async () => {
//       const reqData = await fetch("http://localhost/reactgraphtutorial/marks");
//       const resData = await reqData.json();
//       for (let i = 0; i < resData.length; i++) {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//       }
//       setStudentsubject(sSubject);
//       setStudentMarks(sMarks);
//       //console.log(resData);
//     };

//     getStudentdata();
//   }, []);

//   return (
//     <React.Fragment>
//       <div className="container-fluid mb-3">
//         <h3 className="mt-3">Welcome to Piechart </h3>
//         <Chart
//           type="pie"
//           width={1349}
//           height={550}
//           series={[11, 20, 65, 85, 5]}
//           options={{
//             title: { text: "Student PieChart" },
//             noData: { text: "Empty Data" },
//             // colors:["#f90000","#f0f"],
//             labels: ["Math", "Math", "Math", "Math", "Math"],
//           }}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Piechart;

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import data from "../data/mockData.json";

const UserSatisfactionChart = () => {
  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    const ratings = data.user_satisfaction.ratings.map(({ rating, count }) => ({
      rating,
      count,
    }));
    setRatingsData(ratings);
  }, []);

  return (
    <Chart
      options={{
        chart: {
          type: "pie",
        },
        labels: ratingsData.map((entry) => entry.rating),
        title: {
          text: "User Satisfaction",
        },
        noData: {
          text: "Empty Data",
        },
      }}
      series={ratingsData.map((entry) => entry.count)}
      type="pie"
      width={400}
      height={300}
    />
  );
};

export default UserSatisfactionChart;
