// App.js
import React from "react";

// import Piechart from "./component/PieChart";
import "./App.css";
import Accordion from "./component/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <h1 className="heading">AI Insights Dashboard</h1>
      <div>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
