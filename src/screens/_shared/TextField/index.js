import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({ name, ...rest }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <MuiTextField
        {...input}
        variant="outlined"
        error={meta.touched && !!meta.error}
        fullWidth
        {...rest}
      />
    )}
  </Field>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextField;
