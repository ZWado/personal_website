import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Publication = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Recent Publications</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
    <p>A complete list of publications can be found <a href="https://scholar.google.com/citations?user=nCQs42AAAAAJ&hl=en"><b>here</b></a>.</p>
  </div>
);

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Publication.defaultProps = {
  data: [],
};

export default Publication;
