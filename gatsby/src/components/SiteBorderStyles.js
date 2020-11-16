import styled from "styled-components"
import stripes from "assets/stripes.svg"

export default styled.div`
  background: white url(${stripes});
  background-size: 100rem;
  border: 0.5rem solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  margin: clamp(2rem, 10vw, 12rem) auto 4rem auto;
  max-width: 1200px;
  padding: clamp(0.5rem, 1vw, 1.5rem);
  @media (max-width: 1200px) {
    margin-left: 1.5vmin;
    margin-right: 1.5vmin;
  }
`
