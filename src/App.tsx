import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/PodcasterStore';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
