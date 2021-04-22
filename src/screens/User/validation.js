const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Required';
  }
  if (!values.last_name) {
    errors.last_name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }

  return errors;
};

export default validate;
