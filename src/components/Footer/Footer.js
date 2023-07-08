import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin , AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7873851633">+91-7873851633</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:debkalyanmohanty.id@gmail.com">
            debkalyanmohanty.id@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Developing Today With Tommorow's Technology.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/debkalyanmohanty">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mohantydebkalyan/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/debkalyan.mohanty/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/mohantydebk">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;