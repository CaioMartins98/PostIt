import React from 'react';
import { render, fireEvent, waitFor, getByText } from '@testing-library/react';

import Dashboard from '../../views/Dashboard/Dashboard';

describe('Dashboard', () => {
  it('Envia um novo texto', async () => {
    const { getByTestId } = render(<Dashboard />);

    const textArea = await waitFor(() => getByTestId('text-area-field'));
    const newValue = 'test';
    fireEvent.change(textArea, { target: { value: newValue } });
    expect(textArea.value).toEqual(newValue);

    const btn = await waitFor(() => getByTestId('button-field'));
    fireEvent.click(btn);

    const containerText = await waitFor(() => getByTestId('container-text'));
    expect(containerText).toBeDefined();
  });
});
