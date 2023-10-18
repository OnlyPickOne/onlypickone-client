import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/auth/Login/Login';
import { Signup } from './pages/auth/Signup/Signup';
import { Games} from './pages/Games/Games';

function App() {
 return(

  <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/auth/login' element={<Login/>}/>
    <Route path='/auth/signup' element={<Signup/>}/>
    <Route path='/games' element={<Games/>}/>
  </Routes>

 )
}

export default App;
