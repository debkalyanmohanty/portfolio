import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 184, text: 'Solved Questions On Leetcode'},
  { number: 1264, text: 'Rating On Leetcode' },
  { number: 100, text: 'Days Active Streak On Leetcode', },
  { number: 6, text: 'Badges Earned On Leetcode', }
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
