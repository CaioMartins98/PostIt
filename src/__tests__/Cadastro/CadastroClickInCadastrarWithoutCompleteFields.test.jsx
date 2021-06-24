import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cadastro from '../../views/Cadastro/Cadastro';

describe('Clicando no botão "CADASTRAR" sem preencher os inputs', () => {
  test('Login', async () => {
    const renderComponent = render(<Cadastro />);
    const { getByText, getByTestId } = renderComponent;

    const btn = await waitFor(() => getByText('CADASTRAR'));
    fireEvent(
      btn,
      new MouseEvent({ type: 'click', eventInitDid: { cancelable: true, bubbles: true } }),
    );

    const errorCadastroUser = await waitFor(() => getByTestId('erroCadastro-user'));
    const errorCadastroPassword = await waitFor(() => getByTestId('erroCadastro-password'));

    expect(errorCadastroUser).toBeInTheDocument();
    expect(errorCadastroPassword).toBeInTheDocument();
  });
});
