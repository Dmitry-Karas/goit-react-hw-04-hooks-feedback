import styled from "@emotion/styled";

export const Btn = styled.button`
  width: 150px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;

  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;

  background-color: transparent;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }
`;
