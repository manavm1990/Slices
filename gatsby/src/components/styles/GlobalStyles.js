// Remove the 'local CSS class scoping' for global styles
import { createGlobalStyle } from "styled-components"

// Gatsby allows for these types of special imports - NOT valid JS!
import bg from "assets/bg.svg"
import stripes from "assets/stripes.svg"

import font from "assets/frenchfries.woff"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  :root {
    --color-primary: #FF4649;
    --color-secondary: #ffc600;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
  }
  html, a {
    color: var(--black);
  }
  html {
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: 60rem;
    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 8px;
    scrollbar-color: var(--color-primary) var(--white);
    scrollbar-width: thin;
  }
  a {
   text-decoration-color: var(--color-primary);
   text-decoration-skip-ink: none; 
  }
  body {
    font-size: 20px;
  }
  h1, h2, h3 {
    font-weight: normal;
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p, li {
    letter-spacing: 1px;
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
  .center {
    text-align: center;
  }
  .mark {
    background-color: var(--color-secondary);
    display: inline;
    line-height: 1;
    margin: 0;
    padding: 0 2px 2px 2px;
  }
  .tilt {
    display: inline-block;
    position: relative;
    transform: rotate(-2deg);
  }
`

export default GlobalStyle
