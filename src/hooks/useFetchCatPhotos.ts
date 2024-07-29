import { useState, useEffect } from 'react';
import { fetchCatPhotos } from '../fetchers';

export const useFetchCatPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetchCatPhotos();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return photos;
};

