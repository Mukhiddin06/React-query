import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Single from './pages/Single'

function App() {

  return (
    <>
    <div className='p-5 flex w-[200px] space-x-5 mx-auto text-[22px] font-bold'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/add"}>Add</NavLink>
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
