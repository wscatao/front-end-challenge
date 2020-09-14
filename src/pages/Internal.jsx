import React from 'react';
import { useParams } from 'react-router-dom';

const Internal = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>Pagina internal</div>;
};

export default Internal;
