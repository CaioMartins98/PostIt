import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../../views/Login/Login';

describe('Clicando no botão clicando no link "Cadastre-se"', () => {
  test('Login', async () => {
    const renderComponent = render(<LoginScreen />);
    const { getByText } = renderComponent;

    const link = await waitFor(() => getByText('Cadastre-se'));
    fireEvent(
      link,
      new MouseEvent({ type: 'click', eventInitDid: { cancelable: true, bubbles: true } }),
    );
  });
});
