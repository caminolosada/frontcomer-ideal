import { styled } from "styled-components";
import ContainerStyled from "../../styles/shares/ContainerStyled";

const HomePageStyled = styled(ContainerStyled)`
  .status-container {
    display: flex;
    margin-top: -30px;
    gap: 20px;
    width: 100%;

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
`;

export default HomePageStyled;
