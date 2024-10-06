import { useContext } from "react";
import { AppContext } from "../../context/Appcontext";
//import { useSelector } from "react-redux";
import Logo from "../foodLogo/logo";
import { useDispatch } from "react-redux";
import { remove,add } from "../../store/cartSclice";
import { useNavigate } from "react-router-dom";
import './cart.css'
import { toast } from 'react-toastify';
const CartPopup = ({foodItem}) =>{

    const {setCartIsOpen, cartIsOpen} = useContext(AppContext) 
    //const foodItem = useSelector(state => state.cart)
 
   const  navigate = useNavigate()
    const dispatch =useDispatch();

  function removeFromCart(id) {
    dispatch(remove(id))
     
  }

 
  function addToCart(products) {
    dispatch(add(products))
   
  }
  function handelClick(){
    setCartIsOpen(false)
    navigate('/burger')
  }

  function handleBuy (){
    toast.info('Functionality added Shortly !',{autoClose: 5000});
  }
    return(
        <>

       
{cartIsOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
    <div
      className={`fixed top-0 right-0 w-11/12 md:w-3/4 lg:w-1/3 h-full bg-white shadow-lg p-6 flex flex-col`}
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
            onClick={handelClick}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Items
          </button>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="border-b bg-gray-200">
                <th className="p-2 text-left">Image</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Price</th>
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
                  <td className="p-2 ">
                    <Logo className="" type={item.category} />
                  </td>
                  <td className="p-2 mt-4 gap-2 text-gray-700 flex items-center">
                    <span onClick={() => removeFromCart(item)} className="text-xs border border-gray-400 px-1 rounded cursor-pointer hover:bg-gray-200">-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => addToCart(item)} className="text-xs border border-gray-400 px-1 rounded cursor-pointer hover:bg-gray-200">+</span>
                  </td>
                  <td className="p-2 font-bold text-red-600 cursor-pointer hover:underline">
                    ${item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 font-bold text-lg">
        Total: ${foodItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>

      {/* Buy Button */}
      <div className="mt-6">
        <button
          onClick={handleBuy}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
)}







        </>
    )
}

export default CartPopup;