import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='' element={<Homepage/>}/>
        <Route path='/' element={<Homepage/>}/>

        <Route path='/register' element={<Register/>}/>

        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
