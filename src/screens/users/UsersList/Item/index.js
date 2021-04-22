import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2), // top, left
    paddingRight: `calc(${theme.spacing(2.5)}px - 1px)`,
    paddingBottom: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    flexWrap: 'wrap',
  },
  primary: {
    fontSize: '24px',
    letterSpacing: 0,
    lineHeight: '28px',
  },
  secondary: {
    fontSize: '14px',
    letterSpacing: '0.25px',
    lineHeight: '20px',
  },
  textTop: {
    margin: 0,
  },
  textBottom: {
    marginTop: theme.spacing(0.5),
    marginBottom: 0,
    '&$secondary': {color: 'red !important'}
  },
  textBottomSecondary: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    width: '103px',
    height: '84px',
    marginLeft: 'auto',
  },
}));

const Item = ({ user, onUserSelect }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      onClick={() => onUserSelect(user.id)}
      disableGutters
      className={classes.root}
    >
      <Box>
        <ListItemText
          secondary={`ID: ${user.id}`}
          classes={{
            root: classes.textTop,
            secondary: classes.secondary,
          }}
        />
        <ListItemText
          primary={`${user.first_name} ${user.last_name}`}
          secondary={user.email}
          classes={{
            root: classes.textBottom,
            primary: classes.primary,
            secondary: `${classes.secondary} ${classes.textBottomSecondary}`,
          }}
        />
      </Box>
      <Avatar
        alt={`${user.first_name} ${user.last_name}`}
        src={user.avatar}
        variant="square"
        className={classes.avatar}
      />
    </ListItem>
  );
};

Item.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default Item;
