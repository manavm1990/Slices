import styled from "styled-components"
import stripes from "assets/stripes.svg"

export default styled.div`
  background: white url(${stripes});
  background-size: 75rem;
  border: 0.5rem solid white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
  display: flex;

  /* This value controls the entire size of the logo b/c of 'ems' on all the things. */
  font-size: clamp(1px, 0.65vw, 8px);
  height: 30em;
  margin: 0;
  width: 30em;
  h1 {
    align-items: center;
    display: grid;
    grid-gap: 2em;
    grid-row: 2 / span 2;
    grid-template-rows: 8fr 2fr;
    margin: 0;
    transform: translateY(-0.7em);
  }
  .est {
    align-self: center;
    font-size: 1.5em;
  }
  .inner {
    align-content: center;
    background: white;
    display: grid;
    flex: 1;
    grid-template-rows: 20% 1fr 1fr;
    margin: 1em;
  }
  .letter {
    --rotate: -10deg;
    --rotateX: 0deg;
    --scale: 1;
    --translateX: 0;
    --translateY: 0;

    color: var(--color-primary);
    display: inline-block;
    font-size: 5em;
    line-height: 1;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    transition: transform 0.3s;
    &.S {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.c {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.k {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .slicks {
    display: block;
    perspective: 100px;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    transform: scale(1.4);
  }
`
