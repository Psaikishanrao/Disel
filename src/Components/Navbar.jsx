import { Link } from "react-router-dom";
// import { Grid, textDecoration } from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
// import { Box, Flex, IconButton, Icon } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaUser,
  FaSearch,
  FaQuestion,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Image,
  Grid,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  return (
    <>
      <Box id="navbar"
        backgroundColor={"#e31f2e"}
        px={4}
        h={{ base: "4.25rem", md: "6rem" }}
        w={"100%"}
        // flexWrap={"wrap"}
      >
        <Flex
          h={{ base: 16, md: 20 }}
          alignItems={"center"}
          justifyContent={"space-between"}
          // flexWrap={'wrap'}
          w={'full'}
        >
          <>
            <IconButton
              ref={btnRef}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              className="hide-on-mobile"
              // onClick={isOpen ? onClose : onOpen}
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Category</DrawerHeader>

                <DrawerBody>
                  {/* <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Men"
                    onClick={onClose}
                  >
                    <b>Men</b>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Women"
                    onClick={onClose}
                  >
                    <b>Women</b>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Kid"
                    onClick={onClose}
                  >
                    <b>Kid</b>
                  </Link> */}
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>

          <HStack
            spacing={20}
            alignItems={"center"}
            ml={{ base: "0", md: "100px" }}
            mt={{ base: "0.625rem", md: "2rem" }}
          >
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Men"
              >
                <b>Men</b>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Women"
              >
                <b>Women</b>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Kid"
              >
                <b>Kid</b>
              </Link>
            </HStack>
          </HStack>
          {/* <Box
            ml={{ base: "5%", md: "0" }}
            mt={{ base: "2%", md: "10px" }}
            display={"flex"}
          >
            <Link to="/">
              {" "}
              <Image
                width="9.375rem"
                height="5rem"
                src="https://dieselindia.com/_nuxt/img/logo-mobile002.1aaed20.png"
                alt=""
              />
            </Link>
          </Box> */}
          {isMobile ? null : ( 
            <Box
              ml={{ base: "0", md: "0" }}
              mt={{ base: "0", md: "0.625rem" }}
              display={"flex"}
            >
              <Link to="/">
                {" "}
                <Image
                  width="9.375rem"
                  height="5rem"
                  src="https://dieselindia.com/_nuxt/img/logo-mobile002.1aaed20.png"
                  alt=""
                />
              </Link>
            </Box>
          )}
          <Box
            w={{ base: "12rem", md: "24rem" }}
            h={{ base: "auto", md: "0.625rem" }}
            mt={{ base: "0", md: "0.500rem" }}
          >
            <Flex display={"flex"}>
              <Grid
                templateColumns="repeat(6,1fr)"
                bg={"white"}
                templateRows="repeat(1,1fr)"
                alignItems={"center"}
                backgroundColor={"white"}
                border={"1px solid white"}
              >
                <GridItem>
                  {" "}
                  <Link to={"/login"}>
                    {" "}
                    <IconButton
                      variant="ghost"
                      colorScheme="black"
                      icon={<FaUser color="black" />}
                      aria-label="Login"
                      mx="0.5rem"
                    />
                  </Link>
                </GridItem>
                <GridItem display={{ base: "none", md: "block" }}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <IconButton
                        variant="ghost"
                        colorScheme="black"
                        icon={<FaSearch color="black" />}
                        aria-label="Search"
                        mx="1.5rem"
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem display={{ base: "none", md: "block" }}>
                        <Link to="/Productcar">Products</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </GridItem>
                <GridItem display={{ base: "none", md: "block" }}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <IconButton
                        variant="ghost"
                        colorScheme=""
                        icon={<FaQuestion color="black" />}
                        aria-label="Question"
                        mx="0.5rem"
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to="/Aboutus">About us</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </GridItem>
                <GridItem display={{ base: "none", md: "block" }}>
                  <Link to={"/wish"}>
                    {" "}
                    <IconButton
                      variant="ghost"
                      colorScheme="white"
                      icon={<FaHeart color="black" />}
                      aria-label="Wishlist"
                      mx="0.5rem"
                    />
                  </Link>
                </GridItem>
                <GridItem>
                  <Link to={"/Cart"}>
                    <IconButton
                      variant="ghost"
                      colorScheme="white"
                      aria-label="ShoppingCart"
                      mx="1.1rem"
                      icon={<FaShoppingCart color="black" />}
                    />
                  </Link>
                </GridItem>
                <GridItem>
                  <Button onClick={toggleColorMode}>
                    <MoonIcon  color={"black"}/>
                  </Button>
                </GridItem>
              </Grid>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
