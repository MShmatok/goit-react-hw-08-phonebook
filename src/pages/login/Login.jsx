import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkToStyled } from '../../components/commonStyled/SectionStyled.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';

const defaultTheme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataLogin = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(loginThunk(dataLogin));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FaRegCircleUser size={40} />
          <Typography component="h1" variant="h4">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkToStyled to="/registration" variant="body2">
                  Don't have an account? Sign Up
                </LinkToStyled>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
