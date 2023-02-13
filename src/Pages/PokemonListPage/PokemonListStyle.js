import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background-color: #5e5e5e;
  h1 {
    color: white;
    font-size: 3rem;
    margin-left: 3vw;
    padding-top: 3vh;
    margin-bottom: 3vh;
  }
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
  }
`;
