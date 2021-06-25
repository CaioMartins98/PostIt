import { Popover, Toolbar, Typography, Button } from '@material-ui/core';

import styled from 'styled-components';

export const ToolbarContainer = styled(Toolbar)`
  background: black;
  height: 90px;
`;

export const TypographyContainer = styled(Typography)`
  font-family: 'Pacifico';
`;

export const ButtonField = styled(Button)`
  background: black;
  cursor: pointer;
  border: none;
  position: relative;
`;

export const PopoverContainer = styled(Popover)`
  display: flex;
  aling-items: center;
  justify-content: center;

  h2 {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin: 15px;
  }
`;
