import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import React from 'react';
import Box from '@mui/material/Box';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../commonStyled/SectionStyled.styled';
import { addNewContactThunk } from 'redux/thunk';

const Contacts = () => {
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
