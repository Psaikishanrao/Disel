import { useContext, useEffect } from "react"
import {  wishContext } from "../Context/WishContext"
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { cartContext } from "../Context/CartContext";

export const WishList=()=>{

    const{wish}= useContext(wishContext);
    const{handleCart}= useContext(cartContext);

    function addToCart(el){
        handleCart(el);
        alert("Item added to cart!")
    }
    
    return(wish.length!=0?
      

        <>
        <Heading m={"30px"}>WISHLIST</Heading>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap: "wrap" }}>
        {wish.map((el) => {
          return <Grid templateColumns='repeat(4, 1fr)' gap={4}>
          <Box w={400} letterSpacing={2}>
           <Flex justifyContent={'space-around'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
               <Box w={500}>
               {/* <Link to={`/product/${id}`}>  */}
                    <img style={{ width: "450px", height: "650px" }} src={el.icon} alt={el.id} />
                  {/* </Link> */}
                 </Box>
              <Box>
                    <Text>
                      <b>₹{el.mrp}</b>  <Text  display={'inline'}  textDecoration={"line-through"}>₹{el.disc}</Text>{el.off}
                    </Text>
                   <Text>{el.details}</Text>   
                  
                   
                   <Button onClick={()=>{
                    addToCart(el);
                   }} >Add to Cart</Button>
                   {/* onClick={()=>{{handlecart}} */}
                   </Box>
                </Flex>
              </Box>
              </Grid>
        })}
      </div>
      </>
      : <Heading m={"50px"}> Your Wishlist Is Empty!</Heading>
        
    )

}