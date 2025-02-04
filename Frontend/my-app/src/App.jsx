import Login from "./component/Login"
import Sign from "./component/Signup"
import {Home} from "./pages/Home"
import {Productform} from "./component/Productform"
import './App.css'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Sign/>}/>
        <Route path="/productform" element={<Productform/>}/>
      </Routes>

    </>
  )
}

export default App
