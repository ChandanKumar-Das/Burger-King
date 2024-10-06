import { useContext, useEffect, useState } from "react";
import BurgerCards from "../components/BurgerCards";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/Appcontext";


const Burger = () => {
  const { filterData } = useContext(AppContext);
  const [burgerData, setBurgerData] = useState(filterData || []);

  const [visibleItems, setVisibleItems] = useState(10);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (filterData.length === 0) {
      const storedData = localStorage.getItem("burgerData");
      if (storedData) {
        setBurgerData(JSON.parse(storedData));
      }
    } else {
      setBurgerData(filterData);
    }
  }, [filterData]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      //console.log(bottom);
      if (bottom) {
        setShowLoader(true)
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMoreItems = () => {
    
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    setShowLoader(false)
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex justify-center flex-wrap gap-4">
          
            {burgerData.length > 0 ? (
              burgerData
                .slice(0, visibleItems)
                .map((item, index) => (
                  <BurgerCards key={index} burgerData={item} />
                ))
            ) : (
              <div className="mt-8">
                <p className="font-bold text-lg text-blue-600 flex justify-center">OOps ..</p>
                <p>No item available ...</p> 
               </div>
            )}
           {showLoader ? (<div>Loading...</div>): null}
            
        </div>
      </div>
    </>
  );
};

export default Burger;
