import { render, screen } from "@testing-library/react";
import Ola from "../src/components/Ola";

test('deve exibir "Olá, mundo"', () => {
    render(<Ola />);
    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument();
});
