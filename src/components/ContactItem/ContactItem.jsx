import PropTypes from 'prop-types';

import { ContainerItem } from './ContactItem.styled';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { DriveFileRenameOutline } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 450,
}));

const ContactItem = ({ contact, onDelete, onChange }) => {
  return (
    <Item
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ justifyContent: 'space-between' }}
      >
        <Box sx={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
          {/* <Avatar>W</Avatar> */}
          <Typography noWrap>
            {contact.name}: {contact.phone}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={onDelete} aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={onChange}
            aria-label="change"
            color="success"
            size="large"
          >
            <DriveFileRenameOutline />
          </IconButton>
        </Box>
      </Stack>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
