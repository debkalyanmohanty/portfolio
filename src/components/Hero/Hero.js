import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { PiHandsPrayingBold } from 'react-icons/pi';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Jai Shree Krishna <PiHandsPrayingBold size='4rem'/><br/>I'm DK<br/>
          Web Developer
        </SectionTitle>
        <SectionText>
        Spiritually-grounded web developer passionate about crafting meaningful online experiences with a touch of transcendence
        </SectionText>
        <Button onClick={() => (window.location = 'https://drive.google.com/file/d/1Of4hwbx2lV5eN_5jQx9uqkJ2nsXM12aA/view?usp=sharing')}>
          Resume
        </Button>

      </LeftSection>
  </Section>
);

export default Hero;