import React from 'react';
import Map from '../components/Map';
import Chart from '../components/Chart';
import { useQuery } from 'react-query';

// Define the structure for the country data
interface Country {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
}

// Define the structure for the world data
interface WorldData {
  cases: {
    [key: string]: number;
  };
  deaths: {
    [key: string]: number;
  };
  recovered: {
    [key: string]: number;
  };
}

// Define the structure for the API response data
interface DataResponse {
  countries?: Country[];
  worldData?: WorldData;
}

// Fetch data from the API
const fetchData = async (): Promise<DataResponse> => {
  const [countriesResponse, worldDataResponse] = await Promise.all([
    fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json()),
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((res) => res.json()),
  ]);

  const countries: Country[] = countriesResponse;
  const worldData: WorldData = worldDataResponse;

  return { countries, worldData };
};

const Charts: React.FC = () => {
  const { data, isLoading, error } = useQuery<DataResponse>('data', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className='col-span-6'>
      <h1 className='my-2 text-lg mx-8 text-[#0C134F] font-bold'>Cases :</h1>
      <div className="w-[90%] h-[18em] md:h-[30em]  mx-auto my-4">
        {data?.worldData && <Chart worldData={data.worldData} />}
      </div>

      <div className='w-[90%] border-8 h-[16em] md:h-[30em] mx-auto my-4'>
        {data?.countries && <Map countries={data.countries} />}
      </div>
    </div>
  );
};

export default Charts;
