import React from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+201093505489'>+20-1093505489</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:atteff101@gmail.com'>Mail me here!</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Ahmed3tef' target='_blank'>
            <AiFillGithub style={{ fontSize: '3rem' }}></AiFillGithub>
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/ahmed-atef-al-atafy-417a951a9/'
            target='_blank'>
            <AiFillLinkedin style={{ fontSize: '3rem' }}></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons
            href='https://www.facebook.com/A7mEeDO0O'
            target='_blank'>
            <AiFillFacebook style={{ fontSize: '3rem' }}></AiFillFacebook>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
