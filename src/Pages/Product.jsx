import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { Center } from "@chakra-ui/react";

export const Product=()=>{
    let api="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
    const[product,setProduct]= useState([]);

    const fetchData=async()=>{
        let res= await fetch(api);
        let data= await res.json();
        setProduct(data.data);
        console.log(product);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
    
        <div>
        
            <Center fontSize={"2xl"} fontWeight={"bold"} borderRadius={"10px"} bg='red.500' h='10' color='white' margin={"20px"}>PRODUCTS</Center>
            
                <div style={{display: "flex", flexWrap: "wrap", rowGap: "20px", columnGap: "20px", justifyContent: "space-evenly"}}>
                {
                        product.map((el)=>{
                            return(
                            <ProductCard {...el} />
                            )
                        })
                }
        </div>
        </div>
    )
}