import { useEffect, useState } from 'react';
import BurgerCards from '../components/BurgerCards';
import Navbar from "../components/Navbar";

const Burger = () => {
  const [allData, setAllData] = useState([]); // Initialize state as an array
    
  useEffect(() => {
    fetch('/data/AllBurger.json')
      .then((response) => response.json())
      .then((data) =>  setAllData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container mx-auto py-8">
        <div className="flex justify-center flex-wrap gap-4">
          {allData.length > 0 ? (
            allData.map((item, index) => (
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
