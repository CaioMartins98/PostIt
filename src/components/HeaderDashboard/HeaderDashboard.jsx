import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Popover from '@material-ui/core/Popover';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import title from '../../assets/title.png';
import { Image } from '@material-ui/icons';

const HeaderDashboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100vw',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'simple-popover' : undefined;

  // const [values, setValues] = useState({
  //   username: '',
  // });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ background: 'black' }}>
          <Typography style={{ fontFamily: 'Pacifico' }} variant="h4" className={classes.title}>
            <img style={{ height: '50px' }} src={title} alt="title" />
          </Typography>
          <Button
            style={{ background: 'black', cursor: 'pointer', border: 'none' }}
            onClick={handleOpen}
            color="inherit"
          >
            <PersonIcon fontSize="large" style={{ color: 'white' }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ display: 'flex', alingItems: 'center', justifyContent: 'center' }}
      >
        <h2
          style={{
            padding: 17,
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '700',
            cursor: 'pointer',
            marginRight: '10px',
          }}
          onClick={() => (localStorage.removeItem('token'), (window.location.href = '/'))}
        >
          Sair <DirectionsRunIcon fontSize="medium" />
        </h2>
      </Popover>
    </div>
  );
};

export default HeaderDashboard;
