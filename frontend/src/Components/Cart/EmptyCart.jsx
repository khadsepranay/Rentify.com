import {
  Image,
  Stack,
  Center,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../Home/HomeNavbar";

const EmptyCart = () => {
  return (
    <Box>
      <Box mt={"90px"}>
        <HomeNavbar />
      </Box>
      <Stack>
        <Center>
          <Image
            objectFit="cover"
            height="215"
            width="250"
            src="https://www.rentomojo.com/public/images/error/no-cart.png"
            alt="Cart is Empty"
          />
        </Center>
      </Stack>
      <br />
      <Stack>
        <Box>
          <Heading as="h3" size="lg"></Heading>
          <Text fontSize="3xl">No items in cart</Text>
        </Box>

        <Box>
          <Text>
            Add few items to your cart and come back here for an
            <br />
            express checkout process!
          </Text>
        </Box>
        <br />
        <Box>
          <Link to="/packages">
            <Button
              borderRadius={0}
              bg="#dc3226"
              br="2px"
              color="white"
              variant="solid"
            >
              {/* <a href="/bangalore/catalog">Browse catalogue</a> */}
              <Text px={2} py={2} as="abbr" fontSize="sm">
                Browse catalogue
              </Text>
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default EmptyCart;
