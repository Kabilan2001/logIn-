import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SIGNUP from './about';
import Login from './home';
import Base from './base';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Base/>}/>
    <Route path='/home' element={<Login/>}/>
    <Route path='/about' element={<SIGNUP/>}/>
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;