import { Container, Grid, Button } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled(Container)`
  && {
    height: 100vh;
    width: 100vw;
    display: inline;
    justify-content: center;
    align-items: center;
    background: #ffffff;
  }
`;

export const Label = styled.label`
  && {
    font-family: 'Poppins';
    font-size: 30px;
  }
`;

export const AreaContainer = styled(Grid)`
  && {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TextAreaContainer = styled(Grid)`
  && {
    margin-top: 5vh;
    display: flex;
  }
`;

export const TextArea = styled.textarea`
  && {
    font-family: 'Poppins';
    width: 500px;
    min-width: 450px;
    max-width: 450px;
    min-height: 100px;
    max-height: 100px;
    font-size: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
    margin-bottom: 20px;
  }
`;

export const ButtonField = styled(Button)`
  && {
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 700;
    color: white;
    background: #3d4ddb;
    margin-bottom: 20px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    outline: none;

    :hover {
      background: #313dad;
    }
  }
`;

export const CardContainer = styled.div`
  && {
    width: 100vw;
  }
`;

export const MainGridContainer = styled(Grid)`
  && {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const GridContainer = styled(Grid)`
  && {
    border: 3px solid #3d4ddb;
    width: 200px;
    height: 300px;
    border-radius: 8px;
    background: white;
    margin-top: 30px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    margin-left: 1%;
    margin: 5;
  }
`;

export const GridTextContainer = styled(Grid)`
  && {
    width: 500px;
    max-width: 500px;
    height: 500px;
    border-radius: 8px;

    margin-top: 15px;
    word-wrap: break-word;
  }
`;

export const GridText = styled(Grid)`
  && {
    width: 26.25rem;

    height: 180px;
  }
`;

export const GridTextArea = styled.div`
  && {
    width: 450px;
    max-width: 450px;
    height: 50px;

    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-top: 15px;
    word-wrap: break-word;
  }
`;

export const DateContainer = styled.div`
  && {
    margin-left: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const DatePublished = styled.p`
  && {
    cursor: default;
    font-size: 1rem;
    margin-top: 3px;
    margin-left: 6px;
    padding: 10;

    font-family: 'Poppins';
  }
`;

export const UserPublished = styled.p`
  && {
    cursor: default;
    font-size: 1rem;
    margin-top: 2px;
    margin-left: 8px;
    padding: 10;
    font-weight: 700;
    font-family: 'Poppins';
  }
`;

export const Content = styled.p`
  && {
    font-family: Poppins;
    font-size: 1rem;
    width: 300px;

    border-radius: 4px;
    margin-top: 6px;
    margin-left: 50px;

    :hover {
      cursor: default;
      transition: 0.5s;
      font-size: 1.1rem;
    }
  }
`;

export const ReactionContainer = styled.div`
  && {
    width: 30px;
    display: flex;
    align-items: center;
    height: 10px;
    margin-left: 10px;
    margin-top: 52px;
  }
`;

export const LovedPress = styled.span`
  && {
    cursor: pointer;
    margin-right: 4px;
  }
`;
export const CountLove = styled.p`
  && {
    font-family: 'Poppins';
    margin-right: 10px;
  }
`;

export const LikedPress = styled.span`
  && {
    cursor: pointer;
    margin-right: 4px;
  }
`;

export const CountLike = styled.p`
  && {
    font-family: 'Poppins';
    margin-right: 10px;
  }
`;
