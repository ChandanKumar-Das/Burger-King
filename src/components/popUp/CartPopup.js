import { useContext } from "react";
import { AppContext } from "../../context/Appcontext";

const CartPopup = () =>{

    const {setCartIsOpen, cartIsOpen} = useContext(AppContext) 
console.log(cartIsOpen)
    const foodItem = {
      id: 1,
      name: "Chicken Cheeseburger",
      restaurantname: "Burger Haven",
      image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
      category: "non-veg",
      available: true,
      description: "A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, and pickles.",
    };
    return(
        <>

       
 {cartIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={()=>setCartIsOpen(false)}
            >
              ✕
            </button>

            {/* Food item details */}
            <div className="flex flex-col items-center">
              <img
                src={foodItem.image}
                alt={foodItem.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">{foodItem.name}</h2>
              <h4 className="text-lg text-gray-600 mt-2">
                Restaurant: {foodItem.restaurantname}
              </h4>
              <p className="mt-2"><strong>Category:</strong> {foodItem.category}</p>
              <p className="mt-2 text-gray-700 text-center">
                {foodItem.description}
              </p>
              <p
                className={`mt-4 font-bold ${foodItem.available ? 'text-green-600' : 'text-red-600'}`}
              >
                {foodItem.available ? "Available" : "Not Available"} 
              </p>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export default CartPopup;