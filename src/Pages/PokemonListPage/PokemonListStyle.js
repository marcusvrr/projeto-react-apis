import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background-color: #5e5e5e;
  min-height: 100vh;
  width: 100vw;
  h1 {
    color: white;
    font-size: 4rem;
    padding-top: 3vh;
    margin-bottom: 3vh;
  }
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
  }
`;
