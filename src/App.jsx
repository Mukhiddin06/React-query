import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Single from './pages/Single'

function App() {

  return (
    <>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/add"}>Add</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/:id' element={<Single/>} />
    </Routes>
    </>
  )
}

export default App
