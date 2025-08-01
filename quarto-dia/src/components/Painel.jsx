import styled from 'styled-components';

export default styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  border: solid 2px #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
