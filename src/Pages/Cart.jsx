import { useContext, useEffect, useState} from "react"
import { cartContext } from "../Context/CartContext"
import { CartCard } from "../Components/CartCard";
import { Box, Button, Center, Flex, Grid, HStack, Heading, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const{cart,setCart}= useContext(cartContext);

    const[tot,setTot]= useState(0);
    const[gst,setGst]= useState(0);
    let navigate= useNavigate();

    const uniCartId= new Set();
    // let newCart;

    function handleTot(){
        
        let tp=0;
        for(let i=0;i<cart.length;i++)
        {
            tp=tp+cart[i].mrp;
        }
        setTot(tp);
        setGst(tp*0.18);
    }
    useEffect(()=>{
        handleTot();
        cart.map((el)=>{
            uniCartId.add(el.id);
        })
        // newCart=cart.filter((el)=>)
        
    },[cart]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    function checkout(){
        console.log("inside checkout");
        alert("Order Successfully Placed! Do shop again");
        setCart([]);
        // window.location.href="/Cart";
        return navigate("/Cart");
    }

    function sendHome(){
        window.location.href="/";
    }

    return(cart.length!=0?
        <Box>
           <Center p={"50px"} borderColor={"teal"} border={"5px"} fontSize={"2xl"} fontWeight={"bold"} >Cart Total Amount- Rs.{tot}</Center>
        
            <VStack>
            <Flex gap={"50px"} flexDirection={"column"}>
            {
                cart.map((el)=>{
                    return <CartCard {...el}/>
                })
            }
            </Flex>
            </VStack>
            
                <VStack m={"50px"}   align={"center"} >
                    <Heading>Cart Amount- ₹{tot}</Heading>
                    <Heading>GST- 18%   </Heading>
                    <Heading>GST Amount- ₹{gst}</Heading>
                    <Heading>Amount Payable- ₹{tot+gst}</Heading>
                    <Button m={"30px"} onClick={checkout} alignSelf={"center"} variant={"solid"} colorScheme="green">Checkout</Button>
                </VStack>
            
            
            
        </Box>:
        <Box><Heading p={"30px"}>Oops the cart is empty....</Heading>
        <Button onClick={sendHome} p={"30px"} size={"lg"} variant={"link"} colorScheme="blue" >Start Shopping</Button></Box>
    )
}