import { Link } from "react-router-dom";
import { Grid, Collapse,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaUser, FaSearch, FaQuestion, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const orangeColor = "hsl(8, 100%, 50%)";
  const { isOpen, onToggle } = useDisclosure();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <Box w={"100%"} h={"auto"} bg={"#FF4500"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: "1rem", md: "2rem" }}
        borderBottom="1px solid"
        borderColor="gray.200"
        direction={{ base: "column", md: "row" }}
      >
        {/* Hamburger menu */}
        <IconButton
          icon={<Icon as={FaBars} />}
          variant="ghost"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          aria-label="Toggle Navigation"
        />

        {/* Left-side section */}
        <Collapse in={isOpen || showNav} animateOpacity>
          <Flex
            align={{ base: "center", md: "flex-start" }}
            direction={{ base: "column", md: "row" }}
            display={{ base: "flex", md: "flex" }}
            mt={{ base: "1rem", md: 0 }}
            mb={{ base: "1rem", md: 0 }}
          >
            <Box
              fontSize="xl"
              fontWeight="bold"
              mx={{ base: "0", md: "1rem" }}
              mb={{ base: "0.5rem", md: 0 }}
              onClick={closeNav}
            >
              <Link to="/Products">Products</Link>
            </Box>
            <Button variant="ghost" fontSize="xl" fontWeight="bold" mx={{ base: '0', md: '1rem' }} mb={{ base: '0.5rem', md: 0 }}>
          Man
        </Button>
        <Button variant="ghost" fontSize="xl" fontWeight="bold" mx={{ base: '0', md: '1rem' }} mb={{ base: '0.5rem', md: 0 }}>
          Woman
        </Button>
        <Button variant="ghost" fontSize="xl" fontWeight="bold" mx={{ base: '0', md: '1rem' }} mb={{ base: '0.5rem', md: 0 }}>
          Kids
        </Button>
          </Flex>
        </Collapse>

        {/* Middle section with the logo */}
        <Box mb={{ base: "1rem", md: 0 }} textAlign={{ base: "center", md: "left" }}>
          <nav fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
            <Link to="/">
              {" "}
              <img width={"150px"} src="https://dieselindia.com/_nuxt/img/logo-mobile002.1aaed20.png" alt="" />
            </Link>
          </nav>
        </Box>

        {/* Right-side section */}
        <Flex
          align="center"
          mt={{ base: "1rem", md: 0 }}
          ml={{ base: "0", md: "auto" }}
          direction={{ base: "row", md: "row" }}
        >
          <IconButton variant="ghost" icon={<Icon as={FaUser} />} aria-label="Login" mx="0.5rem" />
          <IconButton variant="ghost" icon={<Icon as={FaSearch} />} aria-label="Search" mx="1.5rem" />
          <IconButton variant="ghost" icon={<Icon as={FaQuestion} />} aria-label="Question" mx="0.5rem" />
          <IconButton variant="ghost" icon={<Icon as={FaHeart} />} aria-label="Wishlist" mx="0.5rem" />
          <IconButton
            variant="ghost"
            icon={<Icon as={FaShoppingCart} />}
            aria-label="Cart"
            mx="0.5rem"
          />
        </Flex>
      </Flex>
    </Box>
  );
};


