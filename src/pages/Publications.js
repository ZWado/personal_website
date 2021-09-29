import React from 'react';

import Main from '../layouts/Main';

import Publication from '../components/Resume/Publication';
// import positions from '../data/resume/positions';
import publications from '../data/resume/publications';

const Publications = () => (
  <Main
    title="Publications"
    description="Yi Zhang's Publications."
  >
    <article className="post" id="resume">
      <Publication data={publications} />
    </article>
  </Main>
);

export default Publications;
