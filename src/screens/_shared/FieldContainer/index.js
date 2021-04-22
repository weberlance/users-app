import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
const FieldContainer = ({ children, ...rest }) => {
  return (
    <Box
      {...rest}
      mt={1.75}
      mb={1.75}
    >
      {children}
    </Box>
  );
};

FieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FieldContainer;
