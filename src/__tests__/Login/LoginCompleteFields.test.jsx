import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import LoginScreen from '../../views/Login/Login';

describe('Preenchendo inputs do login', () => {
  it('Ação de entrar na aplicação', async () => {
    const { getByTestId } = render(<LoginScreen />);

    const userArea = await waitFor(() => getByTestId('username-field').querySelector('input'));
    const userValue = 'caioo';
    fireEvent.change(userArea, { target: { value: userValue } });
    expect(userArea.value).toEqual(userValue);

    const passwordArea = await waitFor(() => getByTestId('username-field').querySelector('input'));
    const passwordValue = '1234';
    fireEvent.change(passwordArea, { target: { value: passwordValue } });
    expect(passwordArea.value).toEqual(passwordValue);

    const btn = await waitFor(() => getByTestId('buttonLogin-field'));
    fireEvent.click(btn);
  });
});
