import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        height: 100vh;
        background-color: #EFEFEF;
        font-family: 'Courier New', Courier, monospace;
    }

    div#root {
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 50px;
        row-gap: 100px;
        padding: 100px 0;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(1, auto);
        }
    }
`;

export default GlobalStyle;