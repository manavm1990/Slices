import styled from "styled-components"

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    align-items: center;
    background: var(--grey);
    border-radius: 2px;
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: auto 1fr;
    padding: 4px;

    .count {
      background-color: var(--white);
      padding: 2px 4px;
    }

    .active {
      background: var(--color-secondary);
    }
  }
`
