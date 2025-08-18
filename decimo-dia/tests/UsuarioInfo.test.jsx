import { render, screen } from '@testing-library/react';
import UsuarioInfo from '../src/components/UsuarioInfo';
import { beforeEach, expect } from 'vitest';

beforeEach(() => {
    global.fetch = vi.fn(() => {
        return Promise.resolve({
            json: () => Promise.resolve({ name: 'Joao' })
        })
    });
});

test('deve consumir api e exibir nome do usuario', async () => {
    render(<UsuarioInfo/>);
    expect(await screen.findByText('Usuário: Joao')).toBeInTheDocument();
});