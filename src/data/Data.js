const axios = require('axios').default;

const baseURL = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&';
const categories = '518';

const defaultPosts = async () => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        categories,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getLastPosts = async (pageNumber) => {
  if (pageNumber === 0) {
    const response = await defaultPosts();
    return response;
  }

  try {
    const response = axios.get(baseURL, {
      params: {
        categories,
        page: pageNumber,
      },
    });

    return response;
  } catch (err) {
    return err;
  }
};

export default getLastPosts;
