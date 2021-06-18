import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const Header = () => {
  return (
    <Grid
      style={{
        background: 'black',
        color: 'white',
        fontFamily: 'Pacifico',
        fontSize: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '75vw',
      }}
    >
      <div
        style={{
          justifyContent: 'space-between',
          textAlign: 'center',
          display: 'flex',
          fontSize: '100px',
        }}
      >
        <h1>Post</h1>

        <h1 style={{ marginLeft: '15px', color: '#3D4DDB' }}> It!</h1>
      </div>
    </Grid>
  );
};

export default Header;
