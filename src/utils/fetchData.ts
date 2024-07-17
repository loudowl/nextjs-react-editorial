import axios from 'axios';

const LOREM_IPSUM_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const CAT_PHOTOS_API_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchLoremIpsum = async () => {
  const response = await axios.get(LOREM_IPSUM_API_URL);
  return response.data;
};

export const fetchCatPhotos = async () => {
  const response = await axios.get(CAT_PHOTOS_API_URL, {
    params: { limit: 10 },
  });
  return response.data;
};