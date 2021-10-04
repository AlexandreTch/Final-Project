import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body {
        font-size: 100%;
        font-family: 'Bebas Neue', serif;
        margin: 0;
        padding: 0;
        height: 100%
    }
    h1, p, h2, h3 {
        color: white;
    }
`;

export default GlobalStyles;
