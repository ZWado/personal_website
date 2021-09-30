import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yi Zhang's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Recent News</Link></h2>
          <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">CV</Link>, {' '}
            <Link to="/stats">publications</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p>2021.09.30&nbsp;&nbsp;&nbsp;Gave an invited talk about Claim Provenance at Fackbook AI.</p>
      <p>2021.08.27&nbsp;&nbsp;&nbsp;Finished my summer internship at Google AI.</p>
      <p>2021.06.01&nbsp;&nbsp;&nbsp;A new <a href="https://aclanthology.org/2021.acl-long.458.pdf">paper</a> about claim provenance accepted by ACL 2021.
      </p>
    </article>

  </Main>
);

export default Index;
