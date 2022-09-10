
import './App.css';
import NavBar from './Component/HomeUI/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Auth/Login';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
