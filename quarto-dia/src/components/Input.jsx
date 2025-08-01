import styled from "styled-components";

const Input = styled.input`
    padding: 0.5rem;
    border: solid 1px #ccc;
    border-radius: 6px;
    min-height: 38px;

    &:focus {
        border-color: #007bff;
    }

    &::placeholder {
        color: #007bff;
    }
`;

export default Input;