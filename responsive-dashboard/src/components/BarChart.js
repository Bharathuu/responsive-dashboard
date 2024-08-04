import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.newexample.com/BarChart'); 
        const data = result.data;

        setChartData({
          labels: data.labels || [],
          datasets: [
            {
              label: 'Sales',
              data: data.sales || [], 
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError('Network Error: Unable to fetch data');
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} options={{ maintainAspectRatio: false }} />}
    </div>
  );
};

export default BarChart;
