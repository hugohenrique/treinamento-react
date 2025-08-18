import { fireEvent, render, screen } from '@testing-library/react';
import BotaoContador from '../src/components/BotaoContador';
import { expect } from 'vitest';

test('deve incrementar contador ao clicar', () => {
    render(<BotaoContador/>);

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    expect(screen.getByText('Cliquei 1 vezes')).toBeInTheDocument();
    // expect(botao).toHaveTextContent('Cliquei 2 vezes');
});
