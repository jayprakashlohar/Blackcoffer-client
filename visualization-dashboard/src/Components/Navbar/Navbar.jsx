import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="0px 20px 0px 20px"
        background="blackAlpha.300"
      >
        <Link to="/">
          {" "}
          <Image
            w="30%"
            src="https://blackcoffer.com/wp-content/uploads/2022/02/Blackcoffer-logo-new.png"
          />
        </Link>
        <Link to="/dashboard">
          <Text fontSize="25px" fontFamily="cursive" fontWeight="bold">
            Dashboard
          </Text>
        </Link>
      </Box>
    </>
  );
};

export { Navbar };
