import React, { useRef, useEffect } from 'react';

import { CarouselButtons } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Right now, I am finishing my 7th semester at university. My goal is to become a better software developer. Currently studying Java and SQL to master spring back-end technology.      </SectionText>
      <CarouselButtons>

      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
