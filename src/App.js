import React, { useContext, useEffect } from 'react';
import BlogContext from './context/BlogContext';
import { getLastPosts } from './data/Data';

const App = () => {
  const { setPosts , setNumberOfPages } = useContext(BlogContext);
  useEffect(() => {
    const loadContext = async () => {
      const { headers, data } = await getLastPosts();
      setPosts([...data]);
      setNumberOfPages(parseInt(headers['x-wp-totalpages']));
    };

    loadContext();
  }, []);

  return <div>Hello world</div>;
};

export default App;
