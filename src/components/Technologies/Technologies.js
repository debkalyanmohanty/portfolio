import React from 'react';
import { DiFirebase, DiMongodb, DiMootools, DiReact, DiZend } from 'react-icons/di';
import { FaTools } from 'react-icons/fa';
import { RiMiniProgramFill } from 'react-icons/ri';
import { BsBookFill } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML<br/>
              CSS<br/>
              JavaScript<br/>
              React.js <br/>
              TypeScript<br/>
              Material UI<br/>
              Bootstrap<br/>
              Tailwind<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiMongodb size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              NodeJs<br/>
              ExpressJs<br/>
              MongoDB<br/>
              Mongoose ODM<br/>
              MySQL <br/>
              REST API <br/>
              Sockeyt IO<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FaTools size="3rem"/>
          <ListContainer>
            <ListTitle>Tools</ListTitle>
            <ListParagraph>
              Postman<br/>
              Canva<br/>
              Git<br/>
              Cloudinary<br/>
              Vimeo<br/>
              OpenAI<br/>
              Jquery<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <RiMiniProgramFill size="3rem"/>
          <ListContainer>
            <ListTitle>Programming Languages</ListTitle>
            <ListParagraph>
              Java<br/>
              C++<br/>
              Python<br/>
              C<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BsBookFill size="3rem"/>
          <ListContainer>
            <ListTitle>Course Work</ListTitle>
            <ListParagraph>
              OOP<br/>
              DSA<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
