import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1e1e2f; /* 진한 배경 */
    color: #ddd;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    justify-content: center; /* 중앙 정렬 */
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
