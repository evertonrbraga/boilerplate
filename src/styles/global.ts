import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${theme['green500']};
      }

      body {
        background: ${theme['gray900']};
        color: ${theme['gray300']};
        -webkit-font-smoothing: antialiased;
      }

      body,
      input,
      textarea,
      button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    `}
`
