
import Index from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burger from "./pages/Burgers";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/" element={<Index/>}/>
      <Route path="/burger" element={<Burger/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
