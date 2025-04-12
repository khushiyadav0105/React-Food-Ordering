import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();
    
    const handelAddItem=(item)=>{
        dispatch(addItem(item));
    };

    return(
        <div>
           
          {items.map((item) => (<div
            key={item?.card?.info?.id}
            className="p-4 mb-4 border-b border-gray-200 flex justify-between items-start"
            >
            {/* Text Info */}
                <div className="w-9/12 pr-4">
                    <div className="mb-1">
                    <span className="text-base font-medium">{item?.card?.info?.name || "Unknown Item"}</span>
                    <span className="ml-2 text-gray-700">
                        ₹{item?.card?.info?.price ? item.card.info.price / 100 : item?.card?.info?.defaultPrice / 100}
                    </span>
                    </div>
                    <p className="text-sm text-gray-600">{item?.card?.info?.description}</p>
                </div>

                {/* Image + Button */}
                <div className="w-3/12 relative flex flex-col items-center">
                    {item?.card?.info?.imageId && (
                    <img
                        src={CDN_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                        className="w-28 h-24 object-cover rounded-lg mb-2"
                    />
                    )}
                    <button
                    onClick={() => handelAddItem(item)}
                    className="px-4 py-1 bg-white border border-gray-300 rounded shadow text-green-600 font-medium hover:bg-gray-50 transition"
                    >
                    Add +
                    </button>
                </div>
            </div>


            ))}    
        </div>

    )
}

export default ItemList; 