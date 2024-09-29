import {createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext('');

const AppContextProvider =(props)=>{
    
    const [Data, setdata]=useState([])
    const navigate = useNavigate();

    
      const handelfoodtype = (value) =>{
        console.log(value)
        
        fetch('/data/AllBurger.json')
        .then((response) => response.json())
        .then((data) =>{
          if(value ==='VEG'){
             setdata(()=>data.filter((item)=>item.category==='veg'))
          }else if(value ==='NON_VEG'){
            setdata(()=>data.filter((item)=>item.category==='non-veg'))
          }else{
            setdata(data)
          }
          navigate('/burger');
        }
      )

        .catch((error) => console.log(error));
    }
   

    

    

    const value ={
        handelfoodtype,
        Data
    }

    return(
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;