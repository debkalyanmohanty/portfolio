import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 864, text: 'Solved Questions On Leetcode' },
  { number: 1264, text: 'Max Rating On Leetcode' },
  { number: 500, text: 'Days Maximum Streak On Leetcode', },
  { number: 34, text: 'Badges Earned On Leetcode', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
