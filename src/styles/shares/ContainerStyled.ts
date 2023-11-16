import { styled } from "styled-components";

const ContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export default ContainerStyled;
