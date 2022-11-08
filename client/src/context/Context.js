import { createContext, useState } from "react";

export const CartContext=createContext();

const Context=({children})=>{
    const [cart,setCart]=useState([]);
    console.log(cart)
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default Context;