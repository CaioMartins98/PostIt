import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ForgotPassword from '../../views/ForgotPassword/ForgotPassword.jsx';

describe('Clicando no botão "RECUPERAR SENHA" sem preencher o input', () => {
  test('Esqueci minha senha', async () => {
    const renderComponent = render(<ForgotPassword />);
    const { getByText, getByTestId } = renderComponent;

    const btn = await waitFor(() => getByText('RECUPERAR SENHA'));
    fireEvent(
      btn,
      new MouseEvent({ type: 'click', eventInitDid: { cancelable: true, bubbles: true } }),
    );

    const errorForgotUser = await waitFor(() => getByTestId('erroForgot-username'));

    expect(errorForgotUser).toBeInTheDocument();
  });
});
