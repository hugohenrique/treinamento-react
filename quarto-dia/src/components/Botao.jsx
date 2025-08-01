import styled from 'styled-components';

const Botao = styled.button`
    background-color: ${props => props.loading ? '#ccc' : '#007bff'};
    color:  ${props => props.loading ? '#555' : '#fff'};
    padding: 0.5rem 1rem;
    border: none;
    cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.loading ? 0.8 : 1};

    &:hover {
        background-color: ${props => props.loading ? '#ccc' : '#0056b3'};
        color: ${props => props.loading ? '#555' : '#fff'};
    }
`;

export default Botao;