import styled from "styled-components"

export default styled.li`
  display: grid;
  gap: 1rem;

  /* Use 3 rows */
  grid-row: span 3;

  @supports not (grid-template-ros: subgrid) {
    grid-template-rows: auto auto 1fr;
  }

  /* Get grid deets from parent.
    ⚠️ Not supported outside of FF!
   */
  grid-template-rows: subgrid;

  p {
    margin: 0;
  }
`
