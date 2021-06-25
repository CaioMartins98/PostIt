import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import ForgotPassword from '../../views/ForgotPassword/ForgotPassword.jsx';

describe('Preenchendo inputs do "Esqueci minha senha"', () => {
  it('Ação de recuperar senha', async () => {
    const { getByTestId } = render(<ForgotPassword />);

    const userForgotArea = await waitFor(() =>
      getByTestId('username-forgot').querySelector('input'),
    );
    const userForgotValue = 'caioo';
    fireEvent.change(userForgotArea, { target: { value: userForgotValue } });
    expect(userForgotArea.value).toEqual(userForgotValue);

    const btn = await waitFor(() => getByTestId('buttonForgot-field'));
    fireEvent.click(btn);
  });
});
