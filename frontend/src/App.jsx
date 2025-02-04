import { BrowserRouter,Routes,Route } from "react-router-dom";
import {LoginPage} from './Routes.jsx'
import { SignupPage } from "./Routes.jsx";
import {Home } from "./Routes.jsx";
import { CreateProduct } from "./Routes.jsx";

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path ="/create-product" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;