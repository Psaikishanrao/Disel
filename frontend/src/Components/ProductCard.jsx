import {
  Button,
  Flex,
  Text,
  Box,
  Image,
  Grid,
} from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import { wishContext } from "../Context/WishContext";
import {FaRegHeart,FaHeart} from "react-icons/fa"
export const ProductCard = ({
  id,
  type,
  icon,
  details,
  disc,
  mrp,
  off,
  catg,
  color,
}) => {
  const { handleCart } = useContext(cartContext);
  const { handleWish, removeWish } = useContext(wishContext);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const navigate = useNavigate();

  function addToCart() {
    handleCart({ id, type, icon, details, disc, mrp, off, catg, color });
    alert("Item added to cart!");
  }

  function addToWish() {
    handleWish({ id, type, icon, details, disc, mrp, off, catg, color });
    setIsWishAdded(true);
  }

  function removeFromWish() {
    removeWish(id);
    setIsWishAdded(false);
  }

  const handleDetailsClick = () => {
    const productData = {
      id,
      type,
      icon,
      details,
      disc,
      mrp,
      off,
      catg,
      color,
    };

    navigate(`/products/${id}`, { state: { productData } });
  };

  return (
    <Grid templateColumns="1fr" gap={4} maxW="400px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={icon}
        alt={id}
        height={{ base: "200px", md: "400px" }}
        objectFit="cover"
        onClick={handleDetailsClick}
        cursor="pointer"
      />
      <Box p="4">
        <Text fontSize="xl" fontWeight="semibold" mb="2">
          {details}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gridGap="10px">
          <Text>
            <b>₹{mrp}</b>{" "}
            <Text display="inline" textDecoration="line-through">
              ₹{disc}
            </Text>
            {off}
          </Text>
          <Flex flexWrap="wrap" gridGap="5px">
            <Button variant="ghost" colorScheme="red" onClick={addToCart}>
              Add to Cart
            </Button>
            {isWishAdded ? (
              <Button variant="ghost" colorScheme="red" onClick={removeFromWish}>
                <FaHeart/>
              </Button>
            ) : (
              <Button variant="ghost" colorScheme="red" onClick={addToWish}>
                <FaRegHeart/>
              </Button>
            )}
            <Button colorScheme="blue" onClick={handleDetailsClick}>
              Details
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
};
