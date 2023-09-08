import React from 'react';
import { NavStyled } from './Navigation.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';
import { FaBeer } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';

const Navigation = () => {
  return (
    <NavStyled>
      <LinkStyled to="/">
        <FaBeer />
        <span>Home</span>
      </LinkStyled>
      <LinkStyled to="/contacts">
        <BiSolidContact />
        <span>Contacts</span>
      </LinkStyled>
    </NavStyled>
  );
};

export default Navigation;
