import React, { useContext, useEffect, useState } from 'react';

import BlogContext from '../context/BlogContext';

import PostCards from '../components/PostCards';
import Pagination from '../components/Pagination';
import { getLastPosts } from '../data/Data';

const Home = () => {
  const { numberOfPages, posts, setPosts, setNumberOfPages } = useContext(
    BlogContext,
  );
  const embedded = '_embedded';
  const [selectedPage, setSelectedPage] = useState(1);
  const [error, setError] = useState(null);

  const selectPage = (value) => {
    setSelectedPage(value);
  };

  useEffect(() => {
    const context = getLastPosts(selectedPage);
    context
      .then(({ headers, data }) => {
        setNumberOfPages(parseInt(headers['x-wp-totalpages'], 10));
        setPosts([...data]);
      })
      .catch((err) => setError(err));
  }, [selectedPage]);

  return (
    <div>
      {error && <p>Houve um erro...</p>}

      {posts &&
        posts.length > 1 &&
        error === null &&
        posts.map((post) => (
          <PostCards
            key={post.id}
            title={post.title.rendered}
            img={post[embedded]}
            slug={post.slug}
          />
        ))}

      <Pagination totalPages={numberOfPages} handleClick={selectPage} />
    </div>
  );
};

export default Home;
