// Remove the 'local CSS class scoping' for global styles
import { createGlobalStyle } from "styled-components"

// Gatsby allows for these types of special imports - NOT valid JS!
import bg from "assets/bg.svg"
import stripes from "assets/stripes.svg"

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #FF4649;
    --color-secondary: #ffc600;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: 60rem;
    font-size: 8px;
    scrollbar-color: var(--color-primary) var(--white);
    scrollbar-width: thin;
  }
  body {
    font-size: 20px;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: thin;
  }
  button, hr {
    border: 0;
  }
  button {
    --shadow: 2px;
  
    background: var(--color-primary);
    border-radius: 2px;
    box-shadow: --var(shadow) --var(shadow) 0 var(--grey);
    color: var(--white);
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-shadow: 1px 1px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --shadow: 4px;
    }
  }
  hr {
    background-image: url(${stripes});
    background-size: 192rem;
    height: 1rem;
  }
  img {
    max-width: 100%
  }
  .tilt {
    display: inline-block;
    position: relative;
    transform: rotate(-2deg);
  }
`

export default GlobalStyle
