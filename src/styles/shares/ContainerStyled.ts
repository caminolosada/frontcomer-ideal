import { styled } from "styled-components";

const ContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export default ContainerStyled;
