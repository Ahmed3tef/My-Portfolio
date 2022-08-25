import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck as DiCassock } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '15px',
          }}>
          <DiCassock style={{ fontSize: '3.5rem' }} /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Ahmed3tef' target='_blank'>
        <AiFillGithub style={{ fontSize: '3rem' }}></AiFillGithub>
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/ahmed-atef-al-atafy-417a951a9/'
        target='_blank'>
        <AiFillLinkedin style={{ fontSize: '3rem' }}></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/A7mEeDO0O' target='_blank'>
        <AiFillFacebook style={{ fontSize: '3rem' }}></AiFillFacebook>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
