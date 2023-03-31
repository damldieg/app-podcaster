import { ChakraProvider, Heading } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/PodcasterStore';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <Heading>The Podcaster</Heading>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
