import React, { useState } from 'react';
import { ContainerForma, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/selectors';
import { addNewContactThunk } from 'redux/thunk';
import { toast } from 'react-toastify';

import { FaRegCircleUser } from 'react-icons/fa6';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const items = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const isDuplicate = data => {
    let isDuplicate = items.find(elem => {
      return elem.name.toLowerCase() === data.name.toLowerCase();
    });
    if (isDuplicate) {
      toast(`${data.name} is alredy in contacts!`);
      return true;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isDuplicate({ name, phone })) {
      return;
    }
    console.log(1111);
    dispatch(addNewContactThunk({ name, phone }));
    setName('');
    setPhone('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
      name: data.get('name'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FaRegCircleUser size={40} />
          <Typography component="h1" variant="h4">
            Add new contact
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  type="text"
                  label="Name"
                  name="name"
                  autoComplete="text"
                  value={name}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Telephone number"
                  type="tel"
                  id="tel"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={onSubmit}
            >
              Add new contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

    // <ContainerForma onSubmit={onSubmit}>
    //   <Label htmlFor="">
    //     Name
    //     <input
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       value={name}
    //       onChange={onChange}
    //     />
    //   </Label>
    //   <Label htmlFor="">
    //     Phone
    //     <input
    //       type="tel"
    //       name="phone"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //       value={phone}
    //       onChange={onChange}
    //     />
    //   </Label>
    //   <button type="submit" onSubmit={onSubmit}>
    //     Add contact
    //   </button>
    // </ContainerForma>
  );
};

export default ContactForm;
