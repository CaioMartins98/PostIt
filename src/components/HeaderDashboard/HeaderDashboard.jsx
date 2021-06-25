import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Popover, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import title from '../../assets/title.png';
import { useHistory } from 'react-router-dom';
const HeaderDashboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
      <AppBar position="fixed">
        <Toolbar style={{ background: 'black', height: '90px' }}>
          <Typography style={{ fontFamily: 'Pacifico' }} variant="h4" className={classes.title}>
            <img style={{ height: '60px' }} src={title} alt="title" />
          </Typography>
          <Button
            style={{ background: 'black', cursor: 'pointer', border: 'none', position: 'relative' }}
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
          onClick={() => (localStorage.removeItem('token'), history.push('/'))}
        >
          Sair <DirectionsRunIcon fontSize="medium" />
        </h2>
      </Popover>
    </div>
  );
};

export default HeaderDashboard;
