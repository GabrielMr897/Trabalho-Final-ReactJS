import styled from "styled-components";

export const Botao = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderradius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.colorText};
  text-align: ${(props) => props.textalign};

  &:hover {
    cursor: pointer;
  }
`;
