import React from 'react';
import { NavStyled } from './Navigation.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';
import { FaBeer } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { selectorIsAuth } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <NavStyled>
      <LinkStyled to="/">
        <FaBeer />
        <span>Home</span>
      </LinkStyled>
      {isAuth && (
        <LinkStyled to="/contacts">
          <BiSolidContact />
          <span>Contacts</span>
        </LinkStyled>
      )}
    </NavStyled>
  );
};

export default Navigation;
