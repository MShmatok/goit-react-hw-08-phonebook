import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/contact/selectors';
import { deleteContactThunk } from 'redux/contact/thunk';

import * as React from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Filter from 'components/Filter/Filter';
import { openChangeModal } from 'redux/contact/slice';

const ContactList = () => {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  const openModal = data => {
    dispatch(openChangeModal(data));
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: 5 }}>
      <Typography variant="h3" component="h2" textAlign="center">
        All contacts:
      </Typography>
      <Filter />
      {filteredContacts.map(item => (
        <ContactItem
          key={item.id}
          contact={item}
          onDelete={() => handleDelete(item.id)}
          openChangeModal={() => openModal(item)}
        />
      ))}
    </Box>
  );
};

export default ContactList;
