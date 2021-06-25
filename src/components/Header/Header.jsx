import React from 'react';

import Grid from '@material-ui/core/Grid';
const Header = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={11}
        sm={10}
        md={10}
        lg={10}
        style={{
          position: 'relative',
          background: 'black',
          color: 'white',
          fontFamily: 'Pacifico',
          fontSize: '40px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          width: '70vw',
          boxShadow: '10px 0px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            justifyContent: 'space-between',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          <h1 style={{ fontSize: '90px' }}>Post</h1>

          <h1
            style={{
              marginLeft: '15px',
              color: '#3D4DDB',
              fontSize: '90px',
            }}
          >
            {' '}
            It!
          </h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
