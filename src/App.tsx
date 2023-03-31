import { ChakraProvider, Heading } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Heading>The Podcaster</Heading>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
