import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostDetails } from '../data/Data';
import ReadPost from '../components/ReadPost';

const Internal = () => {
  const { slug } = useParams();
  const [details, setDetails] = useState(null);
  const embedded = '_embedded';
  const featuredmedia = 'wp:featuredmedia';

  useEffect(() => {
    const state = getPostDetails(slug);
    state.then(({ data }) => setDetails(data));
  }, [slug]);

  return (
    <div>
      {details && details[0].id ? (
        <ReadPost
          title={details[0].title}
          autor={details[0][embedded]}
          content={details[0].content}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Internal;
