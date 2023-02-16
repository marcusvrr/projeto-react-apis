import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  padding-left: 1.0rem;
  min-width: 550px;
  max-width: 600px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  display: flex;
  position: relative;
  margin: 20px 10px;
  color: white;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  text-shadow: 2px 2px black;
`;

export const PokemonName = styled.h1`
display: flex;
  font-size: 32px;
  margin-left: 0;
  font-weight: 750;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 15px;
  text-shadow: 2px 2px black;
  justify-content: space-between;

`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: black;
  background-color:white;
`;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: white;
  background-color:red;
`;

export const Pokemon = styled.img`
width: 223px;
height: 223px;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
export const ButtonDetails = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;
  line-height: normal;
  color: white;
  &:hover {
    cursor: pointer;
  }
`