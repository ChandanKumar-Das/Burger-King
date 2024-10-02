
import Index from "./pages";
import {  Routes, Route } from "react-router-dom";
import Burger from "./pages/Burgers";
import LogIn from './pages/logIn'


function App() {

  
  return (
    <>
    
    
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/" element={<Index/>}/>
      <Route path="/burger" element={<Burger/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
   

    {/* <ContextApiDemo/> */}
    </>
  );
}

export default App;
