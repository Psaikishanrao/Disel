import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const CartCard = ({
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
  let { handleCart, removeCart, handleCartVal } = useContext(cartContext);
  let navigate = useNavigate();
  let quantity = 0;

  // function nav(){
  //     navigate(`${api}/${id}`)
  // }

  function remove(id) {
    removeCart(id);
    console.log("removed from cart 2");
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
    <Card width={"900px"}>
      <HStack>
        <Image height={"400px"} src={icon} alt={id} borderRadius="lg" />
        <VStack ml={"100px"} w={"full"} mt="6" spacing="3">
          <Heading size="md">
            {color} {catg}
          </Heading>
          <Text>{details}</Text>
        </VStack>

        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <VStack w={"full"}>
              <Button
                variant="solid"
                colorScheme="red"
                onClick={handleDetailsClick}
              >
                Details
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={() => {
                  remove(id);
                }}
              >
                Remove from cart
              </Button>
            </VStack>
          </ButtonGroup>
          <VStack>
            <HStack>
              <Text color="blue.600" fontSize="2xl">
                ₹{mrp}
              </Text>
              <Text display={"inline"} textDecoration={"line-through"}>
                {disc}
              </Text>
            </HStack>
            <Text>{off}</Text>
          </VStack>
        </CardFooter>
      </HStack>
    </Card>
  );
};
