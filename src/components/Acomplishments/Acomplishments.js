import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 103, text: 'Solved Questions On Leetcode'},
  { number: 1264, text: 'Rating On Leetcode' },
  { number: 42, text: 'Days Active Streak On Leetcode', },
  { number: 271, text: 'Solved Questions On CodeChef', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index} >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
