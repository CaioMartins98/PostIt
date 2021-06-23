import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import '@.testing-library/jest-dom/extend-expect';
import LoginScreen from '../views/Login/Login.jsx';

describe('Login Container', () => {
  test('Mostra erro se clicar em ENTRAR sem preencher os campos', async () => {
    const renderComponent = render(<LoginScreen />);

    const { getByText } = renderComponent;
    const btn = getByText('ENTRAR');
    fireEvent(
      btn,
      new MouseEvent({ type: 'click', eventDid: { cancelable: true, bubbles: true } }),
    );
    await waitFor({
      callback: () => {
        getByText('Campo de usuário obrigatório*');
      },
    });
    const errName = getByText('Campo de usuário obrigatório*');
    const errPassword = getByText('Campo de senha obrigatório*');

    expect(errName).toBeInTheDocument();
    expect(errPassword).toBeInTheDocument();

    renderComponent.debug();
  });
});
