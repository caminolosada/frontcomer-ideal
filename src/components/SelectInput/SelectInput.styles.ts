import styled from "styled-components";

export const SelectInputStyles = styled.select`
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 0.8);
  margin: 100px auto;
  padding: 10px;
  width: 85vw;
  border-radius: 15px;
  &:focus {
    border: 3px solid black;
  }

  @media (min-width: 768px) {
    width: 85vw;
  }
`;
