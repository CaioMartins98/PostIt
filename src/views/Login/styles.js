import styled from 'styled-components';
import { Grid, Link } from '@material-ui/core';

export const MainContainer = styled.div`
  && {
    background: #ffffff;
    aling-items: center;
    justify-content: initial;
    display: flex;
    height: 100vh;
    width: 100vw;
  }
`;

export const GridContainer = styled(Grid)`
  && {
    display: flex;
    aling-items: center;
    justify-content: center;

    width: 10vw;
    margin-right: 120vw;
  }
`;

export const GridLoginField = styled(Grid)`
  && {
    color: white;
    font-family: Poppins;

    width: 25vw;

    h1 {
      color: black;
      font-family: 'Poppins';
      font-size: 40px;
      font-weight: 700;
      aling-items: center;
      justify-content: center;
      display: flex;
      margin-right: 0px;
      margin-top: 150px;
    }
  }
`;

export const ErrorField = styled.span`
  && {
    color: red;
  }
`;

export const LinkCadastroContainer = styled.div`
  && {
    alingitems: center;
    justify-content: center;
    display: flex;
    margin-top: 25px;
    margin-bottom: 36px;
    font-size: 25px;
  }
`;
export const LinkForgotPassContainer = styled.div`
  && {
    aling-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;
  }
`;
export const LinkField = styled(Link)`
  && {
    outline: none;

    cursor: pointer;
  }
`;
