import styled from 'styled-components';

import { Grid } from '@material-ui/core';

export const MainContainer = styled.div`
  && {
    background: black;
    width: 100vw;
    height: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  && {
    justify-content: center;
    text-align: center;
    display: flex;

    font-family: 'Pacifico';
  }
`;
export const GridContainer = styled(Grid)`
  && {
    display: flex;
    aling-items: center;
    justify-content: center;
    margin-top: 50px;

    h1 {
      color: white;
      font-family: 'Poppins';
      font-size: 40px;
      font-weight: 700;
      aling-items: center;
      justify-content: center;
      display: grid;
    }
  }
`;

export const GridForgotPassContainer = styled(Grid)`
  && {
    border-radius: 8px;
    color: white;
    font-family: 'Poppins';
    width: 35vw;
    height: 70vh;
  }
`;

export const FieldsContainer = styled.div`
  && {
    width: 100%;
  }
`;

export const ErrorField = styled.span`
  && {
    color: red;
  }
`;

export const BackContainer = styled.div`
  && {
    color: gray;
    aling-items: center;
    justify-content: center;
    display: flex;
    margin-top: 50px;
    margin-bottom: 36px;
    font-size: 25px;
  }

  h3 {
    && {
      cursor: pointer;
    }
  }
`;
