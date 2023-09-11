import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contact/slice';

import React from 'react';

import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Filter = () => {
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const setFilters = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              type="text"
              label="Find contacts by name"
              name="name"
              autoComplete="text"
              value={filter}
              onChange={setFilters}
            />
          </Grid>
        </Grid>
      </Box>
    </>

    // <label htmlFor="">
    //   <p>Find contacts by name</p>
    //   <input
    //     type="text"
    //     name="name"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     value={filter}
    //     onChange={setFilters}
    //   />
    // </label>
  );
};

export default Filter;
