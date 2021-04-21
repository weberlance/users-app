import React from 'react';
import PropTypes from 'prop-types';

const User = ({ match }) => (
  <div>User id: {match.params.id}</div>
);

User.propTypes = {
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
