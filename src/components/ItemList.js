import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (items) =>{  
      //Dispatch an action
      dispatch (addItem(items));
    }
    return (
        <div>
           
            {items.map((items) => (
                <div
                 key = {items.card.info.id}
                 className ="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                     
                    <div>
                      <div className="py-2">
                        <span className="font-bold text-teal-700">{items.card.info.name}</span>
                        <span className="p-1">  ₹{items.card.info.price/100  || items.card.info.defaultPrice/100 }</span>
                      </div>
                      <p className="text-xs">{items.card.info.description}</p>
                    </div>
                    <div>
                     <img src= {CDN_URL + items.card.info.imageId} className ="w-20 ml=auto rounded-md mr-2" />
                     <button 
                      className="p-1 bg-teal-500 text-white text-sm shadow-lg  m-auto rounded-md"
                      onClick = { ()=> handleAddItem(items)}>
                          Add+
                     </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;