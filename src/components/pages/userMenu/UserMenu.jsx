import React from 'react';
import { Button, WrapperUserMenu } from './UserMenu.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';
import { IoExitOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';

const UserMenu = () => {
  const userName = 'Jon Bober';
  return (
    <WrapperUserMenu>
      <FaRegUser />
      <span>{`Welcome, ${userName}`}</span>
      <Button to="/">
        <IoExitOutline />
        <span>Log Out</span>
      </Button>
    </WrapperUserMenu>
  );
};

export default UserMenu;
