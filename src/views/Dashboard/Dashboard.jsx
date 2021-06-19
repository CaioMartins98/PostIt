import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: '',
      alignItems: 'center',
      justifyContent: 'center',
    },

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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    // <div>
    //   <div
    //     style={{
    //       justifyContent: 'center',
    //       textAlign: 'center',
    //       display: 'flex',
    //       fontSize: '50px',
    //       fontFamily: 'Pacifico',
    //       background: 'black',
    //       height: '140px',
    //     }}
    //   >
    //     <h1 style={{ marginLeft: '10px', marginTop: '35px', color: 'white' }}>Post</h1>

    //     <h1 style={{ marginLeft: '25px', marginTop: '35px', color: '#3D4DDB' }}> It!</h1>

    //     <div style={{ marginLeft: '65vw' }}>
    //       <button
    //         type="button"
    //         style={{ background: 'black', cursor: 'pointer', border: 'none' }}
    //         onClick={handleOpen}
    //       >
    //         <PersonIcon fontSize="large" style={{ marginTop: '45px', color: 'white' }} />
    //       </button>
    //     </div>
    //   </div>
    //   <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     className={classes.modal}
    //     open={open}
    //     onClose={handleClose}
    //     closeAfterTransition
    //     BackdropComponent={Backdrop}
    //     BackdropProps={{
    //       timeout: 500,
    //     }}
    //   >
    //     <Fade in={open}>
    //       <div className={classes.paper}>
    //         <h2 id="transition-modal-title">Transition modal</h2>
    //         <p id="transition-modal-description">react-transition-group animates me.</p>
    //       </div>
    //     </Fade>
    //   </Modal>
    // </div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ background: 'black' }}>
          <Typography style={{ fontFamily: 'Pacifico' }} variant="h4" className={classes.title}>
            Post It!
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2
              style={{ fontFamily: 'Poppins', fontSize: '20px', cursor: 'pointer' }}
              id="transition-modal-title"
              onClick={() => {
                window.location.href = 'http://localhost:3000/';
              }}
            >
              Sair
            </h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Dashboard;
