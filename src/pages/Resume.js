import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';
import Services from '../components/Resume/Services';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import services from '../data/resume/services';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'TA Courses',
  'Program Committees',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Yi Zhang's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">CV</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Courses data={courses} />
      <Services data={services} />
    </article>
  </Main>
);

export default Resume;
