import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { saveUser } from '../../redux/actions/user';
import FieldContainer from '../_shared/FieldContainer';
import TextField from '../_shared/TextField';
import validate from './validation';
import useStyles from './styled';

const User = ({
  history,
  match: {
    params: {
      id,
    },
  },
}) => {
  const classes = useStyles();
  const isNew = useMemo(() => id === 'new', [id]);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const storeUserData = useSelector(state => {
    // TODO: improving, add reselect
    return state.users.data.find(u => '' + u.id === id);
  });
  const user = useMemo(() => ({ ...storeUserData }), [storeUserData]);

  const handleBack = useCallback(() => {
    history.push('/users');
  }, [history]);

  const onSubmit = useCallback(values => {
    dispatch(saveUser(values, () => {
      handleBack();
      enqueueSnackbar('Thank you, your submission is pending and will appear after validation.');
    }));
  }, [dispatch, handleBack, enqueueSnackbar]);

  return (isNew || user.id) ? (
    <Box display="flex" justifyContent="center">
      <Box my={6} width="388px" clone>
        <Paper className={classes.container}>
          <Box pt={3} pr={3} pb={1.25} pl={6.5}>
            <ListItemText
              primary={
                <Box>
                  <IconButton aria-label="Back to list" className={classes.backButton} onClick={handleBack}>
                    <KeyboardArrowLeftIcon/>
                  </IconButton>
                  <span>
                    {isNew ? 'New user details' : `${user.first_name} ${user.last_name}`}
                  </span>
                </Box>
              }
              secondary={isNew ? undefined : `ID: ${user.id}`}
              classes={{
                root: classes.title,
                primary: classes.primary,
                secondary: classes.secondary,
              }}
            />
          </Box>
          <Box pl={6.5} pr={3} pb={3}>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              initialValues={user}
              render={({
                handleSubmit,
                form,
                invalid,
                pristine,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="column">
                    <FieldContainer>
                      <TextField
                        name="first_name"
                        label="Name"
                      />
                    </FieldContainer>
                    <FieldContainer>
                      <TextField
                        name="last_name"
                        label="Surname"
                      />
                    </FieldContainer>
                    <FieldContainer>
                      <TextField
                        name="email"
                        label="Email"
                        type="email"
                      />
                    </FieldContainer>
                  </Box>
                  <Box className={classes.buttonGroup}>
                    <Button onClick={() => form.reset()} className={classes.cancelButton}>Cancel</Button>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={invalid || pristine}
                      onClick={handleSubmit}
                    >
                      Submit to review
                    </Button>
                  </Box>
                </form>
              )}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  ) : (
    <Redirect to="/users" />
  );
};

User.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }).isRequired,
  }).isRequired
};

export default User;
