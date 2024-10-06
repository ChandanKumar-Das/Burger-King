
import Index from "./pages";
import {  Routes, Route } from "react-router-dom";
import Burger from "./pages/Burgers";
import LogIn from './pages/logIn'
import Myprofile from "./pages/MyProfile";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  
  return (
    <>
    
    <Provider store={store}>
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/" element={<Index/>}/>
      <Route path="/burger" element={<Burger/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path= "/myprofile" element={<Myprofile/>}/>
      
    </Routes>
    </Provider>
   

    {/* <ContextApiDemo/> */}
    </>
  );
}

export default App;
