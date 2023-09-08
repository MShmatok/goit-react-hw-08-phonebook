import React from 'react';
import { HeaderStyled, Wrapper } from './HeaderStyled.styled';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import LoginMenu from '../loginMenu/LoginMenu';

const Header = () => {
  const isLoggedUser = false;
  return (
    <HeaderStyled>
      <Wrapper>
        <Navigation />
        {isLoggedUser ? <UserMenu /> : <LoginMenu />}
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
