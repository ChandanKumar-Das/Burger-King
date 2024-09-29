
import Index from "./pages";
import {  Routes, Route } from "react-router-dom";
import Burger from "./pages/Burgers";


function App() {
  return (
    <>
    
    
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/" element={<Index/>}/>
      <Route path="/burger" element={<Burger/>}/>
    </Routes>
   

    {/* <ContextApiDemo/> */}
    </>
  );
}

export default App;
