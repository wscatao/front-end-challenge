import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BlogContext from './BlogContext';

const BlogProvider = ({ children }) => {
  // const [complaints, setComplaints] = useState([]);
  // const [diseases, setDiseases] = useState([]);
  // const [medicalRecords, setMedicationRecords] = useState([]);

  // const contextValue = {
  //   complaints,
  //   setComplaints,
  //   diseases,
  //   setDiseases,
  //   medicalRecords,
  //   setMedicationRecords,
  // };

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};

BlogContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogContext;