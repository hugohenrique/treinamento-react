import { render, screen } from '@testing-library/react';
import Saudacao from '../src/components/Saudacao';
import { expect } from 'vitest';

test('mostre o nome se for passado', () => {
    render(<Saudacao nome="Jose" />);
    expect(screen.getByText('Olá, Jose')).toBeInTheDocument();
});

test('mostre o termo visitante, caso o nome nao seja passado', () => {
    render(<Saudacao />);
    expect(screen.getByText('Olá, visitante')).toBeInTheDocument();
})

// <Saudacao />
// Olá, visitante