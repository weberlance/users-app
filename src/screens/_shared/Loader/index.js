import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  // TODO: improving, add reselect
  const isOpen = useSelector(state => (
    state.users.loading ||
    state.user.loading
  ));

  return (
    <Modal open={isOpen}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
       <CircularProgress />
      </Box>
    </Modal>
  );
};

export default Loader;
