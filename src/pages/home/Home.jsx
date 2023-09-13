import React from 'react';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../components/commonStyled/SectionStyled.styled';
import { LinkStyled } from '../../components/header/HeaderStyled.styled';

const Home = () => {
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <h1>
          Welcome to the main page of the Phonebook app! Here, you'll find a
          convenient and straightforward interface for storing and organizing
          your contacts in a list. Use our app to quickly add, edit, and delete
          contacts, as well as search for them by name. Phonebook makes managing
          your contacts incredibly simple and user-friendly.
        </h1>
        <LinkStyled to="/login">
          <span>Let's go!</span>
        </LinkStyled>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Home;
