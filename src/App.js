// components
import Header from './components/Headers/Header';
import Home from './components/home/Home';
import {Box} from '@mui/material';
import DataProvider from './context/DataProvider';
import Cart from './components/Cart/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailView from './components/details/DetailView';

function App() {
  return (
    <DataProvider >
    <BrowserRouter>
        <Header></Header>
        <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/product/:id' element={ <DetailView/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        </Box>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
