import styled from "styled-components";

export const SearchInputStyles = styled.input`
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  width: 85vw;
  height: 40px;
  padding-left: 40px;
  margin: 0 auto;
  &:focus {
    border: 3px solid black;
  }

  @media (min-width: 768px) {
    width: 85vw;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
