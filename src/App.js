import Navbar from './components/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Mint from './pages/Mint';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';


function App(){
  return (
    <BrowserRouter>
    <ThirdwebProvider
    sdkOptions={{
      gasless: {
        biconomy: {
            apiId: process.env.REACT_APP_API_ID, // your Biconomy API Id
            apiKey: process.env.REACT_APP_API_KEY, // your Biconomy API Key
            deadlineSeconds: 123, // your Biconomy timeout preference
          },
      },
    }}
    activeChain={ChainId.Mumbai}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route exact path='/mint' element={<Mint></Mint>}>
        </Route>
      </Routes>
    </ThirdwebProvider>
    </BrowserRouter>
  );
}

export default App;
