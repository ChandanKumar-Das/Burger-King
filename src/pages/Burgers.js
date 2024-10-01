import { useContext, useEffect, useState } from 'react';
import BurgerCards from '../components/BurgerCards';
import Navbar from '../components/Navbar';
import { AppContext } from '../context/Appcontext';

const Burger = () => {
  const { Data } = useContext(AppContext); 
  const [burgerData, setBurgerData] = useState(Data || []); 
  const [visibleItems, setVisibleItems] = useState(10);
  const [showLoader, setShowLoader] = useState(false) 

  useEffect(() => {
   
    if (burgerData.length === 0) {
      const storedData = localStorage.getItem('burgerData');
      setShowLoader(true)
      if (storedData) {
        setBurgerData(JSON.parse(storedData));
      }
    }
  }, [burgerData, Data]);

  useEffect(() => {
   
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      console.log(bottom)
      if (bottom) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const loadMoreItems = () => {
   
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex justify-center flex-wrap gap-4">
          {!showLoader ? (
            burgerData.slice(0, visibleItems).map((item, index) => (
              <BurgerCards key={index} burgerData={item} />
            ))
          ) : (
            <p >Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
