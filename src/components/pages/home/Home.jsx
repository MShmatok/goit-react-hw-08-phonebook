import React from 'react';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../commonStyled/SectionStyled.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';

const Home = () => {
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <h1>Welcome to Phonebook App</h1>
        <LinkStyled to="/login">
          <span>Let's go!</span>
        </LinkStyled>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Home;
