import React from "react";
import Router from "./routes/Router";
import GlobalState from "./Global/GlobalState";
import GlobalStyle from './globalStyles';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
