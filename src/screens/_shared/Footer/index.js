import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.customColors.footerBg,
    borderTop: `2px solid ${theme.customColors.divider}`,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    color: theme.palette.primary.main,
    letterSpacing: '2px',
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Typography component="span" className={classes.label}>
        &copy; Users app
      </Typography>
    </Box>
  );
};

export default Footer;
