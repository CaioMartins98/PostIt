import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  color: white;
  font-family: 'Pacifico';
  font-size: 55px;
  width: 10.0rem
  height: auto;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 760px) {
    width: 100%;
    & > h1 {
      font-size: 70px;
      display: column;
      justify-content: center;
      aling-items: center;
    }
  }
`;
