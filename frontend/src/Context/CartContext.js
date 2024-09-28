import { createContext, useState } from "react";

export const cartContext= createContext();

export const CartContext=({children})=>{

    const [cartVal,setCartVal]= useState(0);

    const [cart,setCart]= useState([]);

    function handleCartVal(){
        setCartVal(cartVal+1);
    }

    const handleCart=(el)=>{
        setCart([...cart,el]);
        setCartVal(cartVal+1);
        console.log("added to cart");
        console.log(cart,cartVal);
        // console.log(cart[0].disc);
        console.log(el.disc);
    }

    const removeCart=(id)=>{
        let arr= cart.filter((element)=>{
            return element.id!==id
        });
        setCart(arr);
        setCartVal(cartVal-1);
        console.log("removed from cart1", cart);
    }


    return(<cartContext.Provider value={{cartVal,cart,handleCart,removeCart,handleCartVal,setCart}}>{children}</cartContext.Provider>)
}