/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import note from '../img/default.jpg';

const PostCards = (props) => {
  const { img, title, slug } = props;
  const featuredMedia = 'wp:featuredmedia';
  let imgProps = null;

  if (!img[featuredMedia]) {
    imgProps = { alt_text: 'Notebook', source_url: note };
  } else {
    // eslint-disable-next-line prefer-destructuring
    imgProps = img[featuredMedia][0];
  }

  const { alt_text: altText, source_url: sourceUrl } = imgProps;

  return (
    <div>
      <h2>{title}</h2>
      <img src={sourceUrl} alt={altText} />
      <Link to={`/internal/${slug}`}>Link</Link>
    </div>
  );
};

export default PostCards;

PostCards.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
