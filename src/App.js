
import Index from "./pages";
import {  Routes, Route } from "react-router-dom";
import Burger from "./pages/Burgers";
import LogIn from './pages/logIn'
import Myprofile from "./pages/MyProfile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  
  return (
    <>
    <ToastContainer/>
    
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/" element={<Index/>}/>
      <Route path="/burger" element={<Burger/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path= "/myprofile" element={<Myprofile/>}/>
      
    </Routes>
    
   

    {/* <ContextApiDemo/> */}
    </>
  );
}

export default App;
