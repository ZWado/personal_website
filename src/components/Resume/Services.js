import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Services = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="program committees" />
    <div className="title">
      <h3>Program Committees</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Services.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Services.defaultProps = {
  data: [],
};

export default Services;
