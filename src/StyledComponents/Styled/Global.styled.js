import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *,*::before,*::after {
        box-sizing : border-box;
        padding : 0;
        margin : 0;
    }

    body {
        font-family : monospace;
        overflow-x : hidden;
    }
`

export const GlobalStyles = createGlobalStyle`
    body {
        background : ${(props) => props.theme.colors.body};
        color : ${(props) => props.theme.colors.text};
        transition : all o.5s ease;
    }

    a {
        color : ${(props) => props.theme.colors.link.text};
        cursor : pointer;
    }

    button {
        border : 0;
        display : inline-block;
        padding: 12px 24px;
        font-size: 14px;
        border-radius: 4px;
        margin-top: 5px;
        cursor: pointer;
        background-color: #1064EA;
        color: #FFFFFF;
    }

    button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`
