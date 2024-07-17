import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  * {
    box-sizing: border-box;
  }
    
  /* Custom link states */
  a:link,
  a:visited,
  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    color: inherit; /* Or specify the desired color */
  }

  /* Specific for WebKit-based browsers */
  a:-webkit-any-link,
  a:-webkit-any-link:active {
    text-decoration: none;
  }

  /* Specific for Mozilla-based browsers */
  a:-moz-any-link,
  a:-moz-any-link:active {
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
