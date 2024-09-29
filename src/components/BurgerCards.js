import React from "react";

const BurgerCards = ({burgerData}) => {
  //console.log('-------',burgerData)
  return (
    <div key={burgerData.index} className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={burgerData.image} alt={burgerData.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{burgerData.name}</div>
        <p className="text-gray-700 text-base">{burgerData.restaurantname}</p>
        <p className="text-sm mt-1 mb-4 text-gray-500">{burgerData.description}</p>
        <div className="flex items-center justify-between">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              burgerData.category === "veg" ? "bg-green-200 text-green-800" : burgerData.category === "non-veg" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {burgerData.category}
          </span>
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              burgerData.available ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"
            }`}
          >
            {burgerData.available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BurgerCards;
