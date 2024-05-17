import React from "react";
import {
  Stack,
  Text,
  Box,
  Image,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import { useContext, useState } from "react";

export const SingleProduct = () => {
  const location = useLocation();
  const productData = location.state.productData;
  const { handleCart } = useContext(cartContext);
  
  function addToCart() {
    handleCart({
      id: productData.id,
      type: productData.type,
      icon: productData.icon,
      details: productData.details,
      disc: productData.disc,
      mrp: productData.mrp,
      off: productData.off,
      catg: productData.catg,
      color: productData.color,
    });
    alert("Item added to cart!")
  }
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "4", md: "8" }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "flex-start" }}
      maxWidth="1200px"
      mx="auto"
      // my="10%"
      p={{ base: "4", md: "8" }}
    >
    
      <Box flex="1" maxWidth={{ base: "100%", md: "31.25rem" }}>
        <Image
          w="100%"
          h="auto"
          src={productData.icon}
          alt={productData.id}
        />
        <Text mt="4">
        {productData.details}
        </Text>
      </Box>

      {/* Details Section */}
      <Box flex="1" maxWidth={{ base: "100%", md: "60%" }}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb="4"
          ml={"10rem"}
        >
          {productData.details}
        </Text>
        <Text mt="4" fontSize={"1xl"}>
          MRP{" "}
          <Text display="inline" textDecoration="line-through">
            ₹{productData.disc} {productData.off}
            {"  "}
          </Text>{" "}
          <b>₹{productData.mrp}</b>
        </Text>
        <Text>Price inclusive of all taxes</Text>
        <RadioGroup defaultValue="2" mt={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            ml={"13rem"}
          >
            <b>COLOR</b>
            <Radio
              value="2"
              colorScheme={productData.color.toLowerCase()}
              layerStyle={(props) =>
                props.isChecked
                  ? {
                      borderColor: "{productData.color.toLowerCase()}",
                      backgroundColor: "{productData.color.toLowerCase()}",
                    }
                  : {}
              }
            >
              {productData.color}
            </Radio>
          </Stack>
        </RadioGroup>
        <Text fontSize={"2xl"} mt={4} mr={"8rem"}>
          Choose Size
        </Text>
        <Box ml={"13rem"}>
          <Grid
            gap={6}
            mt={4}
            gridTemplateColumns={"repeat(5,1fr)"}
            gridTemplateRows={"repeat(2,1fr)"}
          >
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>28</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>29</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>30</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>31</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>32</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>33</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>34</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>35</GridItem>
            </Button>
            <Button
              borderRadius={0}
              border={"1px solid black"}
              blockSize={10}
              w={100}
            >
              <GridItem>36</GridItem>
            </Button>
          </Grid>
        </Box>
        <br />
        <Box ml={"13rem"} mt={4}>
          <Flex display={"flex"}>
            <Input
              borderRadius={0}
              blockSize={10}
              w={300}
              border={"1px solid black"}
            ></Input>{" "}
            <Button
              borderRadius={0}
              blockSize={10}
              w={200}
              border={"1px solid black"}
              bg={"black"}
              color={"white"}
            >
              Check delivery
            </Button>
          </Flex>
        </Box>
        <Box ml={'13rem'} mt={4}>
          <Button borderRadius={0} blockSize={10} w={600}  onClick={addToCart} border={'1px solid black'} bg={'black'} color={'white'}>ADD TO CART</Button>
        </Box>
      </Box>
    </Stack>
  );
};