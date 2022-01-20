import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Student of Business and Technology University since 2018' },
  { text: 'Completed Android course of EPAM' },
  { text: 'Has been intern on company Idnet', },
  { text: 'Trainee in EPAM Georgia', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education/Experiance</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
