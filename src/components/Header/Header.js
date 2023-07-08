import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {GiKangaroo} from 'react-icons/gi';
import { PiBabyBold } from 'react-icons/pi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex' , alignItems:'center' , color: 'white' , marginBottom:'20px'}}>
        <PiBabyBold size="3rem"/> <GiKangaroo size="3rem"/> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
