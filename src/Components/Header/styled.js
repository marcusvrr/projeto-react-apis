import styled from "styled-components";
import { Button} from '@chakra-ui/react'

export const StyledButton = styled(Button)`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;
  line-height: normal;
  color: black;
  margin: 30px;
  font-size: 3rem;
`

export const Container = styled.header`
  height: 8rem;
  font-size: 24px;
  font-weight: 700;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(0,68,140);
  background: white;

  button {
    height: 7vh;
    width: 205px;
    padding: 0 4px;
    margin-right: 20px;
  }
`
export const PrimaLogo = styled.img`
width:100px;
height:100px;`
;
