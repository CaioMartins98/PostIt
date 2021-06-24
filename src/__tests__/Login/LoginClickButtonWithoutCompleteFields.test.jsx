import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../../views/Login/Login';

describe('Clicando no botão "ENTRAR" sem preencher os inputs', () => {
  test('Login', async () => {
    const renderComponent = render(<LoginScreen />);
    const { getByText, getByTestId } = renderComponent;

    const btn = await waitFor(() => getByText('ENTRAR'));
    fireEvent(
      btn,
      new MouseEvent({ type: 'click', eventInitDid: { cancelable: true, bubbles: true } }),
    );

    const errorUser = await waitFor(() => getByTestId('erro-user'));
    const errorPassword = await waitFor(() => getByTestId('erro-password'));

    // await waitFor((callback) => getByText(errorUser));

    expect(errorUser).toBeInTheDocument();
    expect(errorPassword).toBeInTheDocument();
  });
});
