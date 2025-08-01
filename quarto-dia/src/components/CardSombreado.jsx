import styled from "styled-components";

const CardSombreado = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1rem;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;

export default CardSombreado;