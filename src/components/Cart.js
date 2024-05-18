import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { cartEmpty } from "../utils/cartSlice";

const Cart = () => {
    
    const dispatch =useDispatch();
    const handleClearCart = () => {
        dispatch(cartEmpty());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (
      <div className =" m-4 p-4 text-center">
          <h1 className="font-bold text-3xl text-teal-700 ">Cart</h1>
          <div className = "w-6/12 m-auto p-4">
              <div>
                  <button
                  className ="bg-red-400  text-white rounded-lg p-2 m-2 " 
                  onClick = {handleClearCart}>Clear Cart</button>
                  {cartItems.length===0 && <h1>Your Cart is Empty, Please add item to your Cart</h1>}
              </div><br></br>
              <ItemList items={cartItems} /><br></br>
              <br></br>

              <div>
                  <button className="bg-green-500 p-2 text-white rounded-lg">Proceed to Pay</button>
              </div>
          </div>
      </div>
    )
}
export default Cart;