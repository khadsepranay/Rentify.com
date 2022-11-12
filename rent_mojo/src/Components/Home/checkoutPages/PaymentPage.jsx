import React from "react";
import EmptyCart from "./EmptyCart"
// import Singleitem from "./Singleitem"
import { AiOutlineFileText } from "react-icons/ai";

import { TbDiscount2 } from "react-icons/tb";

import {
    Box,
    Spacer,
    Container,
    Flex,
    Text,
    VStack,
    Button,
    TableContainer,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Table,
    Tfoot,
    HStack,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdReceipt } from "react-icons/md";
import { icons } from "react-icons/lib";
import Singleitem from "./Singleitem";

const itemList = [
    {
        id: 50,
        img: "https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg",
        title: "Napster Single Bed & Single Door Fridge Combo",
        price: "500",
        "cat-item--desc": "See package details",
        icons: "",
        stock: "Out of stock",
        available: "It will be available soon",
    },
    {
        id: 51,
        img: "https://p.rmjo.in/moodShot/lhu5kp2t-1024x512.jpg",
        title: "another item",
        price: "1000",
        "cat-item--desc": "See package details",
        icons: "",
        stock: "Out of stock",
        available: "It will be available soon",
    },
    {
        id: 53,
        img: "https://p.rmjo.in/productSquare/ezzd04ug-500x500.jpg",
        title: "another item",
        price: "1000",
        "cat-item--desc": "See package details",
        icons: "",
        stock: "Out of stock",
        available: "It will be available soon",
    },
    {
        id: 54,
        img: "https://p.rmjo.in/moodShot/lhu5kp2t-1024x512.jpg",
        title: "another item",
        price: "1000",
        "cat-item--desc": "See package details",
        icons: "",
        stock: "Out of stock",
        available: "It will be available soon",
    },
];

const myarr = [{}];

const PaymentPage = () => {
    console.log(Date());

    return (
        <>
            <br />
            <br />
            <VStack>
                <Box pt="40px" bg="#F5F7FA" minH="650px" width="100%" borderRadius={8}>
                    <Box width="1170px" margin="auto" borderRadius={8}>
                        <Flex justify="space-evenly" width="100%">
                            <Box>
                                <Box background="white" w="762px" h="332px" borderRadius={8}>
                                    <Text pl="20px" fontSize="lg" pt="15px" align="left">
                                        <AiOutlineFileText /> Order Summary
                                    </Text>
                                    <br />
                                    {/* // ------------------------------------------------------------------------------- */}
                                    <Flex>
                                        <Box
                                            border="1px solid #9accd8"
                                            ml="30px"
                                            h="100px"
                                            w="300px"
                                            borderRadius={5}
                                        >
                                            <TableContainer>
                                                <Table size="sm">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Payable Now</Th>
                                                            <Th></Th>
                                                            <Th isNumeric></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                            <Td>Refundable Deposit</Td>
                                                            <Td></Td>
                                                            <Td isNumeric>₹99999</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Delivery Charges</Td>
                                                            <Td></Td>
                                                            <Td isNumeric>₹999999</Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </TableContainer>
                                        </Box>

                                        <Box
                                            border="1px solid #9accd8"
                                            ml="60px"
                                            h="100px"
                                            w="300px"
                                            borderRadius={5}
                                        >
                                            <TableContainer>
                                                <Table size="sm">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Monthly Payable</Th>
                                                            <Th></Th>
                                                            <Th isNumeric></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                            <Td>Products Rent</Td>
                                                            <Td></Td>
                                                            <Td isNumeric>₹99999</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>GST</Td>
                                                            <Td></Td>
                                                            <Td isNumeric>₹999999</Td>
                                                        </Tr>
                                                    </Tbody>
                                                    <Tfoot>
                                                        <Tr>
                                                            <Td>Total Monthly Rent</Td>
                                                            <Td></Td>
                                                            <Td isNumeric>999999</Td>
                                                        </Tr>
                                                    </Tfoot>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Flex>

                                    <Box ml="30px" mt="100px" align="left">
                                        <Button
                                            size="lg"
                                            height="50px"
                                            width="300px"
                                            border="2px"
                                            color="white"
                                            background="red.500"
                                        >
                                            <Text fontSize="xs" pr={20}>
                                                Payable Now
                                            </Text>{" "}
                                            Proceed
                                        </Button>
                                    </Box>
                                </Box>

                                <br />
                                <Box
                                    background="white"
                                    w="100%"
                                    h="60px"
                                    p={4}
                                    borderRadius={8}
                                    align="left"
                                >
                                    <Text fontSize="xl" color="grey">
                                        {" "}
                                        You are logged in
                                    </Text>
                                </Box>
                                <br />
                                <Box
                                    background="white"
                                    w="100%"
                                    h="60px"
                                    p={4}
                                    align="left"
                                    borderRadius={8}
                                >
                                    <Text fontSize="xl" color="grey">
                                        {" "}
                                        Address and Payment
                                    </Text>
                                </Box>
                            </Box>
                            <Box>
                                <Box w="342px" h="60px" display="flex">
                                    <Box> </Box>
                                    <Box
                                        background="white"
                                        borderRadius={5}
                                        w="100%"
                                        p={1}
                                        display="block"
                                    >
                                        <Text color="grey" fontSize="lg" p={3}>
                                            {" "}
                                            Have a coupon code
                                        </Text>
                                    </Box>
                                </Box>

                                <br />
                                {/* -------------------------------------------------------------
               ----------- -------------------------------------------------- */}
                                {/* main cart items start here */}

                                <VStack spacing={3}>
                                    {itemList.map((elem) => (
                                        <Singleitem
                                            key={elem.id}
                                            image={elem.img}
                                            title={elem.title}
                                            price={elem.price}
                                        />
                                    ))}
                                </VStack>

                                <Text> Delivery by 14th Nov 2022</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </VStack>
        </>
    );
};

export default PaymentPage;
