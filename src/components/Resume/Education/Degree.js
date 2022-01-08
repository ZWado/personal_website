import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h5 className="degree">{data.degree}</h5>
      <h4 className="school"><a href={data.link}>{data.school}</a>, {data.year}</h4>
      <h4 className="school">Thesis Advisors: Zachary G. Ives, Dan Roth.</h4>
      <h4 className="school">Thesis Committee: Fernando Pereira (Google), Chris Callison-burch, Andrew Head, Boon Thau Loo.</h4>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
