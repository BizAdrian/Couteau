import axios from 'axios';

const API_URL = 'https://techcrunch.com/wp-json/wp/v2/';

export const getLatestPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts?per_page=3&_embed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getSiteLogo = async () => {
  try {
    const response = await axios.get(`${API_URL}media?per_page=1`);
    const logo = response.data.find((media: any) => media.title.rendered === 'logo');
    return logo ? logo.source_url : null;
  } catch (error) {
    console.error('Error fetching logo:', error);
    throw error;
  }
};