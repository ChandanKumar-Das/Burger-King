import React, {  useContext, useState } from "react";
import Logo from "./foodLogo/logo";

import { useDispatch } from "react-redux";
import { add } from "../store/cartSclice";
import { AppContext } from "../context/Appcontext";
import { toast } from "react-toastify";


const BurgerCards = ({burgerData}) => {
  
  const [isAdded, setIsAdded] =useState(false)

  const dispatch =useDispatch();
  const {user} =useContext(AppContext)

  function addToCart(products) {
    setIsAdded(true)
    if(user){
      
      dispatch(add(products))
      
    }else{
      toast.info('Login please..!',{autoClose: 1000});
      
    }  
  }
  return (
    <div key={burgerData.index} className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={burgerData.image} alt={burgerData.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{burgerData.name}</div>
        <div className="font-bold text-xl mb-2"> $ {burgerData.price}</div>
        <p className="text-gray-700 text-base">{burgerData.restaurantname}</p>
        <p className="text-sm mt-1 mb-4 text-gray-500">{burgerData.description}</p>
        <div className="flex items-center justify-between">
          {/* <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              burgerData.category === "veg" ? "bg-green-200 text-green-800" : burgerData.category === "non-veg" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {burgerData.category}
          </span> */}
          <Logo type={burgerData.category}/>
          {/* <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              burgerData.available ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"
            }`}
          >
            {burgerData.available ? "Available" : "Unavailable"}
          </span> */}
          {/* <button  className="px-4 bg-white shadow-lg hover:bg-gray-200 text-green-600 font-bold text-xl">ADD</button> */}
          <button
            onClick={()=>addToCart(burgerData)}
            className={`px-4 shadow-lg text-green-600 font-bold text-xl ${isAdded ? 'bg-white' : 'hover:bg-gray-200'}`}
        >
            ADD
        </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCards;
