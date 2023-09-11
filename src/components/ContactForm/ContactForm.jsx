import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contact/selectors';

import { toast } from 'react-toastify';
import InpurForm from 'components/inputForm/InputForm';
import { addNewContactThunk } from 'redux/contact/thunk';

const ContactForm = () => {
  const items = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const isDuplicate = data => {
    let isDuplicate = items.find(elem => {
      return elem.name.toLowerCase() === data.name.toLowerCase();
    });
    if (isDuplicate) {
      toast(`${data.name} is alredy in contacts!`);
      return true;
    }
  };

  const onSubmit = (name, number) => {
    if (isDuplicate({ name, number })) {
      return;
    }
    dispatch(addNewContactThunk({ name, number }));
  };

  return (
    <InpurForm
      onSubmit={onSubmit}
      mainTitle={'Add new contact'}
      btbTitle={'Add new contact'}
    />
  );
};

export default ContactForm;
