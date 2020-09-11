import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const ApplyBoard = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/applyboard2.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="ApplyBoard" />
          <hr className="my-3" />
          <p className="general-font">
            ApplyBoard simplifies the study abroad search, application, and
            acceptance process by connecting international students, recruitment
            partners, and academic institutions on a single streamlined
            platform.
          </p>
          <hr />
          <p className="general-font">
            <b>Role: </b>Software Engineer Intern on the Search team, previously
            Content team
          </p>
          <p className="general-font">
            <b>Duration: </b>May to September 2020
          </p>
          <p className="general-font">
            <b>Technologies: </b>React, Ruby on Rails, PostgreSQL, Docker, Git
            (GitHub), Jira
          </p>
          <p className="general-font">
            <b>Core Contributions</b>
            <ul>
              <li>
                Developed complex data table to handle critical inefficiencies
                in existing requirement mapping system including multi-level
                entity mapping and multi-mapping per entity features reducing
                student application pushbacks by roughly 80%
              </li>
              <li>
                Wrote and tested several REST API endpoints using Ruby on Rails
                & RSpec to handle CRUD operations of entity requirement mappings
              </li>
              <li>
                Leveraged event debouncing across 10+ filters components by
                implementing a custom-built memoized hook in React to optimize
                expensive network requests and in turn, reduce unnecessary DOM
                re-renders
              </li>
              <li>
                Led the research and execution of integrating ESLint into 3
                repositories to enforce code consistency amongst 50+ engineers
              </li>
            </ul>
          </p>
          <PhotoWrapper img="applyboard3.png" desc="Team Lucene" />
          <p className="general-font">
            Check out my{' '}
            <a
              className="hvr-underline"
              href="https://www.applyboard.com/"
              target="_blank"
            >
              Life at ApplyBoard
            </a>{' '}
            post where I discuss my experiences as a remote intern!
          </p>
        </Fade>

        <FooterLink
          path="/work/oculyshealthinformatics"
          title="Up Next"
          subtitle="Oculys Health Informatics"
        />
      </div>
    </div>
  );
};

export default ApplyBoard;