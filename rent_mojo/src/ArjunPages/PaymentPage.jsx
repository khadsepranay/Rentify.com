import React from "react";
import { Box, Spacer, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdReceipt } from "react-icons/md";

const PaymentPage = () => {
    console.log(Date());

    return (
        <>
            <br />
            <br />
            <VStack>
                {/* bg="" */}
                <Box bg="#F5F7FA" minH="650px" width="100%">
                    <Box
                        width="1170px"
                        margin="auto"
                        border="1px solid black"
                        height="600px"
                    >
                        <Flex justify="space-evenly" width="100%" spaci>
                            <Box w="762px" h="332px" border="1px solid black">
                                <Icon as={MdReceipt} w={6} h={6}></Icon>
                                <Text>Order Summary</Text>
                            </Box>

                            <Box>
                                <Box w="342px" h="60px" border="1px solid black"></Box>
                                <br />
                                <Box w="342px" h="200px" border="1px solid black"></Box>
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
