import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  ChartOptions,
} from 'chart.js';

// Register necessary chart elements and plugins
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

// Define the structure for the world data
type WorldData = {
  cases: {
    [key: string]: number;
  };
  recovered: {
    [key: string]: number;
  };
  deaths: {
    [key: string]: number;
  };
};

type ChartProps = {
  worldData: WorldData;
};

const Chart: React.FC<ChartProps> = ({ worldData }) => {
  const chartData = {
    labels: Object.keys(worldData.cases),
    datasets: [
      {
        label: 'Cases',
        backgroundColor: 'aqua',
        data: Object.values(worldData.cases),
      },
      {
        label: 'Recovered',
        backgroundColor: 'green',
        borderColor: 'green',
        pointBorderColor: 'green',
        data: Object.values(worldData.recovered),
      },
      {
        label: 'Deaths',
        backgroundColor: 'red',
        borderColor: 'red',
        pointBorderColor: 'red',
        tension: 0.4,
        data: Object.values(worldData.deaths),
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Line
      data={chartData}
      options={options}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Chart;
