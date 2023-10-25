import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import HomeScreen from './pages/HomeScreen';
import Search from './components/Search_tutorial/Search';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
