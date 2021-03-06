import React from 'react';
import PropTypes from 'prop-types';

import '../css/Pagination.css';

const Pagination = (props) => {
  const { totalPages, handleClick } = props;
  const pages = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  return (
    <div className="page">
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={(e) => handleClick(e.target.value)}
          value={page}
          className="page__button"
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
