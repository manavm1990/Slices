import styled from "styled-components"

export default styled.nav`
  margin-bottom: 3rem;
  ul {
    align-items: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
  li {
    --rot: -2deg;

    /* Will be used for MQs */
    order: 1;
    transform: rotate(var(--rot));
    &:nth-child(1) {
      --rot: 1deg;
    }
    &:nth-child(2) {
      --rot: -2.5deg;
    }
    &:nth-child(4) {
      --rot: 2.5deg;
    }
  }
  a {
    font-size: 1.1em;
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    li:focus,
    li:hover {
      --rot: 3deg;
    }
    a:focus,
    a:hover {
      color: var(--color-primary);
    }
  } ;
`
