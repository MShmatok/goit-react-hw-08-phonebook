import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from 'redux/contact/slice';
import {
  selectorDataForModal,
  selectorIsOpenModal,
} from 'redux/contact/selectors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalChangeContact = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorDataForModal);
  const handleClose = () => dispatch(closeModal());

  console.log(data);

  return (
    <div>
      <Modal
        open={useSelector(selectorIsOpenModal)}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm
            // onSubmitThunk={addNewContactThunk}
            mainTitle={'Change contact'}
            btbTitle={'Apply changes!'}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalChangeContact;
