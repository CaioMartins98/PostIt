import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../../views/Login/Login.jsx';

describe('Clicando no botão clicando no link "Esqueci minha senha"', () => {
  test('Login', async () => {
    const renderComponent = render(<LoginScreen />);
    const { getByText, getByTestId } = renderComponent;

    const link = await waitFor(() => getByText('Esqueci minha senha'));
    fireEvent(
      link,
      new MouseEvent({ type: 'click', eventInitDid: { cancelable: true, bubbles: true } }),
    );
  });
});
