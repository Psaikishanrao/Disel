import { createContext, useState } from "react";

export const wishContext= createContext();

export const WishContext=({children})=>{

    const [wishVal,setWishVal]= useState(0);

    const [wish,setWish]= useState([]);

    function handleWishVal(){
        setWishVal(wishVal+1);
    }

    const handleWish=(el)=>{
        setWish([...wish,el]);
        setWishVal(wishVal+1);
        console.log("added to wish", wishVal, wish);
    }

    const removeWish=(id)=>{
        let arr= wish.filter((element)=>{
            return element.id!==id
        });
        setWish(arr);
        setWishVal(wishVal-1);
        console.log("removed from wish", wishVal, wish);
    }


    return(<wishContext.Provider value={{wishVal,wish,handleWish,removeWish,handleWishVal}}>{children}</wishContext.Provider>)
}
