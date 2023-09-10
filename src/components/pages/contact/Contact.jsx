import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../commonStyled/SectionStyled.styled';
import { addNewContactThunk, getAllthunk } from 'redux/contact/thunk';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        {' '}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 4fr)' }}>
          <ContactForm
            onSubmitThunk={addNewContactThunk}
            mainTitle={'Add new contact'}
            btbTitle={'Add new contact'}
          />
          <ContactList />
        </Box>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Contacts;
