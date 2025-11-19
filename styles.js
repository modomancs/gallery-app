import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
     background-color: #f5f5f5;
     padding-top: 20px;
    margin: 0;
    font-family: system-ui;
  }
`;
