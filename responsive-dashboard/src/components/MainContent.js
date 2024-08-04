import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';


const MainContent = () => {
  return (
    <div className="main-content">
      <h2>Dashboard</h2>
      <div className="charts">
        <div className="chart-container">
          <h3>Line Chart</h3>
          <LineChart />
        </div>
        <div className="chart-container">
          <h3>Bar Chart</h3>
          <BarChart />
        </div>
        <div className="chart-container">
          <h3>Pie Chart</h3>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
