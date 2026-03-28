import React from 'react';
import { DiReact, DiMongodb } from 'react-icons/di';
import { FaTools, FaAws } from 'react-icons/fa';
import { RiMiniProgramFill } from 'react-icons/ri';
import { BsBookFill } from 'react-icons/bs';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <List>

      {/* Frontend */}
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML<br />
            CSS<br />
            JavaScript<br />
            TypeScript<br />
            React.js<br />
            Material UI<br />
            Bootstrap<br />
            Tailwind<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Backend */}
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Golang<br />
            Node.js<br />
            Express.js<br />
            REST API<br />
            Socket.IO<br />
            Spring<br />
            Spring Boot<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Cloud & DevOps */}
      <ListItem>
        <FaAws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            AWS<br />
            Docker<br />
            Jenkins<br />
            GitHub Actions<br />
            NGINX<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Database */}
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB<br />
            Mongoose ORM<br />
            MySQL<br />
            PostgreSQL<br />
            Oracle<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Tools */}
      <ListItem>
        <FaTools size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git<br />
            GitHub<br />
            Bitbucket<br />
            Postman<br />
            WSL<br />
            CMD<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Programming Languages */}
      <ListItem>
        <RiMiniProgramFill size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Java<br />
            Go<br />
            JavaScript<br />
            TypeScript<br />
            Python<br />
            C++<br />
            C<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Coursework */}
      <ListItem>
        <BsBookFill size="3rem" />
        <ListContainer>
          <ListTitle>Course Work</ListTitle>
          <ListParagraph>
            OOP<br />
            DSA<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;