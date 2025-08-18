import { render, screen, fireEvent } from '@testing-library/react';
import FormEmail from '../src/components/FormEmail';
import { expect } from 'vitest';

test('deve chamar onEnviar com o email correto', () => {
    const emailAddress = 'usuario@embasa.com.br';
    const mockEnviar = vi.fn();

    render(<FormEmail onEnviar={mockEnviar} />);

    fireEvent.change(
        screen.getByPlaceholderText('Digite seu email'),
        { target: { value: emailAddress } }
    );

    fireEvent.click(screen.getByText('Enviar'));

    expect(mockEnviar).toHaveBeenCalledTimes(1);
    expect(mockEnviar).toHaveBeenCalledWith(emailAddress);
});

test('não deve disparar onEnviar com o email incorreto', () => {
    const emailAddress = 'usuario@embasa';
    const mockEnviar = vi.fn();

    render(<FormEmail onEnviar={mockEnviar} />);

    fireEvent.change(
        screen.getByPlaceholderText('Digite seu email'),
        { target: { value: emailAddress } }
    );

    fireEvent.click(screen.getByText('Enviar'));

    expect(mockEnviar).toHaveBeenCalledTimes(1);
    expect(mockEnviar).toHaveBeenCalledWith(emailAddress);
});