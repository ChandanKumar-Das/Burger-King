import { useEffect, useState } from 'react';
import BurgerCards from '../components/BurgerCards';
import Navbar from "../components/Navbar";
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Burger = () => {
  const {Data} = useContext(AppContext) // Initialize state as an array
  

  useEffect(() => {
    
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container mx-auto py-8">
        <div className="flex justify-center flex-wrap gap-4">
          {Data.length > 0 ? (
            Data.map((item, index) => (
              <BurgerCards key={index} burgerData={item} /> 
            ))
          ) : (
            <p>Loading...</p> 
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
