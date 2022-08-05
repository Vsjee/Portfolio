import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffffff;
    margin: 0;
    padding: 0;
    p, a, ul, li {
      color: #000;
      font-size: 1.2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      text-decoration: none;
      list-style: none;
    }
    input, textarea {
      font-size: 1.1rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h1, h2, h3, h4, h5, h6{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    button {
      font-size: 1.1rem;
    }
  }
`

export default GlobalStyle