import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();
    const handelClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m=10 p-10 ">
            <h1 className="text-2xl font-bold">cart</h1>
            <button className="bg-black text-white p-2 m-2 rounded-lg "onClick={handelClearCart}>Clear Cart</button>
            {cartItems.length===0 && <h1>Cart is empty. Add items to cart</h1>}
            <div className="w-6/12 m-auto">

                <ItemList items={cartItems}/>
            </div>
        </div>

    )
}

export default Cart;