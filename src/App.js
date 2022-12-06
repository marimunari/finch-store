import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Exclusives from './pages/Exclusives';
import Promotion from './pages/Promotion';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

import Menu from './components/Menu';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exclusives' element={<Exclusives />} />
        <Route path='/promotion' element={<Promotion />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/product/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
