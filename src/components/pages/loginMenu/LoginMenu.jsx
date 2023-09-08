import React from 'react';
import { BiSolidUserPlus } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';

import { RegistrationWrapper } from '../registration/Registration.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';

const LoginMenu = () => {
  return (
    <RegistrationWrapper>
      <LinkStyled to="/registration">
        <BiSolidUserPlus />
        <span>Sing Up</span>
      </LinkStyled>
      <LinkStyled to='/login'>
        <IoExitOutline />
        <span>Sing In</span>
      </LinkStyled>
    </RegistrationWrapper>
  );
};

export default LoginMenu;
