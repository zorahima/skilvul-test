import '../assets/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Ironman from './Ironman'
import Search from './Search'

const App = () => {
  return (
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/ironman' element={<Ironman/>} /> 
      <Route path='/search' element={<Search/>} /> 
    </Routes>

    </div>
  )
}

export default App;
