import { useState, useEffect } from 'react';
import { fetchLoremIpsum } from '../fetchers';

export const useFetchLoremIpsum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLoremIpsum();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};
