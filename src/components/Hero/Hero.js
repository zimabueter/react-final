import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This website aims to show projects that I have done for the final exam of React course. Shota Berelidze makes this website.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;