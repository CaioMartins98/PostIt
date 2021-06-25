import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Cadastro from '../../views/Cadastro/Cadastro.jsx';

describe('Preenchendo inputs do Cadastro', () => {
  it('Ação de entrar na aplicação', async () => {
    const { getByTestId } = render(<Cadastro />);

    const userCadastroArea = await waitFor(() =>
      getByTestId('usernameCadastro-field').querySelector('input'),
    );
    const userCadastroValue = 'caioo';
    fireEvent.change(userCadastroArea, { target: { value: userCadastroValue } });
    expect(userCadastroArea.value).toEqual(userCadastroValue);

    const passwordCadastroArea = await waitFor(() =>
      getByTestId('passwordCadastro-field').querySelector('input'),
    );
    const passwordCadastroValue = '1234';
    fireEvent.change(passwordCadastroArea, { target: { value: passwordCadastroValue } });
    expect(passwordCadastroArea.value).toEqual(passwordCadastroValue);

    const btn = await waitFor(() => getByTestId('buttonCadastro-field'));
    fireEvent.click(btn);
  });
});
