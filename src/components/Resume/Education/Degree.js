import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <h5 className="school"><a href={data.link}>{data.school}</a>, {data.year}</h5>
      <p className="school">Thesis Advisors: Zachary G. Ives, Dan Roth.</p>
      <p className="school">Thesis Committee: Fernando Pereira, Chris Callison-burch, Andrew Head, Boon Thau Loo.</p>
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
