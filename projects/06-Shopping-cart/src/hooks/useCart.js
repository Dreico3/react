import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () =>{
    //interesting mode to use the context
    const context = useContext(CartContext)

    if(context === undefined) {
        throw new Error('useCart must be used withing a CartProvider')
    }
    return context

}