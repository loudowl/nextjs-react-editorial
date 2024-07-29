import axios from 'axios';

const WORDPRESS_API_URL = 'https://your-wordpress-site.com/wp-json/wp/v2';
const LAYOUT_API_URL = 'https://your-layout-api.com';
const AD_SERVICE_URL = 'https://your-ad-service.com';
const LOREM_IPSUM_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const CAT_PHOTOS_API_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchArticles = async () => {
  const response = await axios.get(`${WORDPRESS_API_URL}/posts`);
  return response.data;
};

export const fetchLayout = async (type: string) => {
  const response = await axios.get(`${LAYOUT_API_URL}/layout/${type}`);
  return response.data;
};

export const fetchAds = async () => {
  const response = await axios.get(`${AD_SERVICE_URL}/ads`);
  return response.data;
};



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
