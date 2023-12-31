import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RecoilRoot>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecoilRoot>
  </React.StrictMode>,
)