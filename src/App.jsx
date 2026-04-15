import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
