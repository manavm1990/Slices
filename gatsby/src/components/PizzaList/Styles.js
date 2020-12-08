import styled from "styled-components"

export default styled.ul`
  display: grid;
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`
