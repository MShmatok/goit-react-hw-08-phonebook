import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/selectors';
import { deleteContactThunk } from 'redux/thunk';

import * as React from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Filter from 'components/Filter/Filter';

const ContactList = () => {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  const handlerOnChange = () => {
    console.log('click');
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
          onChange={() => handlerOnChange(item.id)}
        />
      ))}
    </Box>
  );

  // return (
  //   <ul>
  //     {filteredContacts.map(item => (
  //       <ContactItem
  //         key={item.id}
  //         contact={item}
  //         onDelete={() => handleDelete(item.id)}
  //       />
  //     ))}
  //   </ul>
  // );
};

export default ContactList;
