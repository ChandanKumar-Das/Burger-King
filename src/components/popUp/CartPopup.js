import { useContext } from "react";
import { AppContext } from "../../context/Appcontext";
//import { useSelector } from "react-redux";
import Logo from "../foodLogo/logo";
import { useDispatch } from "react-redux";
import { remove } from "../../store/cartSclice";
const CartPopup = ({foodItem}) =>{

    const {setCartIsOpen, cartIsOpen} = useContext(AppContext) 
    //const foodItem = useSelector(state => state.cart)
 
    const dispatch =useDispatch();

  function removeFromCart(id) {
    dispatch(remove(id))
     
  }
    return(
        <>

       
{cartIsOpen && (
  <div   className="fixed inset-0 z-50 bg-black bg-opacity-50">
    <div
     className={`fixed top-0 right-0 w-11/12 md:w-3/4 lg:w-1/3 h-full bg-white shadow-lg p-6 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
        cartIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={() => setCartIsOpen(false)}
      >
        ✕
      </button>

     
      <h2 className="text-xl font-semibold mb-4 text-center">Your Cart</h2>

     
      {foodItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src=""
            alt="Empty Cart"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600 text-lg">You have no items in your cart</p>
          <button
            onClick={() => {
              setCartIsOpen(false);
           
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Items
          </button>
        </div>
      ) : (
      
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="p-2 text-left">Image</th>
              <th className="p-2 text-left">Name</th>
              {/* <th className="p-2 text-left">Restaurant</th> */}
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">quantity</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {foodItem.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-2">{item.name}</td>
                {/* <td className="p-2">{item.restaurantname}</td> */}
                <td className="p-2 ">
                  <Logo  className="" type={item.category}/>
                </td>
                <td className="p-2 text-gray-700">{item.quantity}</td>
                <td 
                  onClick={() => removeFromCart(item.id)} 
                  className="p-2 font-bold text-red-600 cursor-pointer hover:underline"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
)}



        </>
    )
}

export default CartPopup;