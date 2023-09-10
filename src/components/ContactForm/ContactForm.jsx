import React, { useState } from 'react';
import { ContainerForma, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contact/selectors';
import { addNewContactThunk } from 'redux/contact/thunk';
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

const ContactForm = ({ onSubmitThunk, mainTitle, btbTitle }) => {
  const dataUser = { name: 'Petro', number: '04654646' };
  const [name, setName] = useState(dataUser.name ?? '');
  const [number, setNumber] = useState(dataUser.number ?? '');

  const items = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
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
    if (isDuplicate({ name, number })) {
      return;
    }
    console.log(1111);
    dispatch(onSubmitThunk({ name, number }));
    setName('');
    setNumber('');
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
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FaRegCircleUser size={40} />
          <Typography component="h1" variant="h4">
            {mainTitle}
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
                  name="number"
                  label="Telephone number"
                  type="tel"
                  id="tel"
                  value={number}
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
              {btbTitle}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
