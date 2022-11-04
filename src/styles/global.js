import { createGlobalStyle } from "styled-components";
import { pxvwp } from "../uteis/pxvwp";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${pxvwp(24)};

      @media (min-width: 768px) {
        font-size: ${pxvwp(18)};
      }

      @media (min-width: 1075px) {
        font-size: ${pxvwp(16)};
      }
    }
`;

export default Global;
