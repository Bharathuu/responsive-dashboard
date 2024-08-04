import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.example.com/piechartdata');
        const data = result.data;

        setChartData({
          labels: data.labels,
          datasets: [
            {
              data: data.values,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
              ],
            },
          ],
        });
      } catch (error) {
        setError('Network Error: Unable to fetch data');
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <Pie data={chartData} options={{ maintainAspectRatio: false }} />}
    </div>
  );
};

export default PieChart;
