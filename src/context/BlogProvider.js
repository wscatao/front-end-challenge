import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BlogContext from './BlogContext';

const BlogProvider = ({ children }) => {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [posts, setPosts] = useState([]);

  const contextValue = {
    numberOfPages,
    setNumberOfPages,
    posts,
    setPosts,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogProvider;