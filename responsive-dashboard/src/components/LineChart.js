import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.example.com/linechartdata');
      setChartData(result.data);
    };
    fetchData();
  }, []);

  return <Line data={chartData} />;
};

export default LineChart;
