import Login from "./component/Login"
import Sign from "./component/Signup"
import {Home} from "./pages/Home"
import './App.css'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Sign/>}/>
      </Routes>

    </>
  )
}

export default App
