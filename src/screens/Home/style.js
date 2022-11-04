import styled from "styled-components";
import { pxvwp } from "../../../src/uteis/pxvwp";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${pxvwp(32)};
  max-width: 100%;

  @media (min-width: 1075px) {
    flex-wrap: nowrap;
  }
`;
