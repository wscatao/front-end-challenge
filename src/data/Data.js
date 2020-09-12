const axios = require('axios').default;

export const getLastPosts = async () => {
  try {
    const response = await axios.get(
      'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518',
    );
    return response;
  } catch (err) {
    return err;
  }
};
