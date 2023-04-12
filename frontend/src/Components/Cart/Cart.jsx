import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Table,
  Tbody,
  Text,
  Thead,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../Home/HomeNavbar";
import {
  decreaseCartData,
  deleteCartItem,
  getData,
  increaseCartData,
} from "../../Redux/Cart/actions";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  let cartData = useSelector((state) => state.Cart.CartData);

  let dispatch = useDispatch();
  let Navigate = useNavigate();

  let ref_deposit = 0;
  let delivery_charges = 0;
  let payable_now = 0;
  let gst = 0;
  for (let i = 0; i < cartData.length; i++) {
    ref_deposit =
      ref_deposit + cartData[i].product.price2 * cartData[i].quantity;
    delivery_charges = delivery_charges + 36 * cartData[i].quantity;
    payable_now = payable_now + cartData[i].price * cartData[i].quantity;
    gst = gst + cartData[i].quantity * 0.06 * cartData[i].price;
  }

  function handleIncrement(id) {
    dispatch(increaseCartData(id));
  }

  function handleDecrement(id) {
    dispatch(decreaseCartData(id));
  }

  function handleDelete(id) {
    dispatch(deleteCartItem(id));
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    dispatch(getData());
    scrollToTop();
  }, []);

  if (cartData.length == 0) {
    return (
      <ChakraProvider>
        <EmptyCart />
      </ChakraProvider>
    );
  }

  return (
    <Box>
      <Box mt={"60px"}>
        <HomeNavbar />
      </Box>
      {
        <Box bg={"#F5F7FA"} width={"100%"} padding={"50px 0px 50px 0px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{
              base: "row",
              xl: "row",
              lg: "row",
              md: "column-reverse",
              sm: "column-reverse",
              base: "column-reverse",
            }}
            width={{
              base: "100vw",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            margin={"auto"}
            mt={"10px"}
            gap={"15px"}
            fontFamily={"sans-serif"}
          >
            <Box
              background="white"
              p={"25px"}
              borderRadius={"20px"}
              m={"auto"}
              width={{
                xl: "800px",
                lg: "800px",
                md: "520px",
                sm: "500px",
                base: "380px",
              }}
            >
              <Box>
                <Flex
                  alignItems={"flex-start"}
                  gap={"5px"}
                  margin={"0px 0px 30px"}
                >
                  <AiOutlineFileText />
                  <Text fontSize="14px" align="left" fontFamily={"sans-serif"}>
                    Order Summary
                  </Text>
                </Flex>
                <Flex
                  gap={"20px"}
                  justifyContent={"space-between"}
                  flexDir={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <Box
                    border={"1px solid #9accd8"}
                    width={{
                      base: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "48%",
                      xl: "48%",
                    }}
                    height={"150px"}
                    textAlign={"left"}
                    lineHeight={"2.5"}
                    p={"20px"}
                    borderRadius={"10px 15px"}
                  >
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      Payable Now
                    </Text>
                    <hr />
                    <Flex justifyContent={"space-between"} mt={"10px"}>
                      <Text fontSize={"12px"}>Refundable Deposit</Text>
                      <Text fontSize={"12px"}>₹ {ref_deposit}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"}>
                      <Text fontSize={"12px"}>Delivery Charges</Text>
                      <Text fontSize={"12px"}>{`₹ ${delivery_charges}`}</Text>
                    </Flex>
                  </Box>
                  <Box
                    border={"1px solid #9accd8"}
                    width={{
                      base: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "48%",
                      xl: "48%",
                    }}
                    textAlign={"left"}
                    lineHeight={"2.5"}
                    p={"20px"}
                    borderRadius={"10px 15px"}
                  >
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      Monthly Payable
                    </Text>
                    <hr />
                    <Flex justifyContent={"space-between"} mt={"10px"}>
                      <Text fontSize={"12px"}>Product Rent</Text>
                      <Text fontSize={"12px"}>₹ {payable_now}/month</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} mb={"10px"}>
                      <Text fontSize={"12px"}>GST</Text>
                      <Text fontSize={"12px"}>₹ {gst}/month</Text>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"} py={"10px"}>
                      <Text fontSize={"12px"}>Total Monthly Rent</Text>
                      <Text fontSize={"12px"}>₹ {payable_now + gst}</Text>
                    </Flex>
                    <hr />
                  </Box>
                </Flex>
              </Box>
              <Button
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                border="2px"
                color="white"
                background="#DC3226"
                p={"30px 20px"}
                textAlign={"left"}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "70%",
                  lg: "300px",
                  xl: "300px",
                }}
                margin={"20px -35.525px 0px 0px"}
                _hover={{ bg: "#DC3226" }}
                onClick={() => Navigate("/payment")}
              >
                <Box>
                  <Text fontSize={"12px"}>
                    ₹ {ref_deposit + delivery_charges}
                  </Text>
                  <Text fontSize={"12px"}>Payable Now</Text>
                </Box>
                <Text fontSize={"14px"}>Proceed</Text>
              </Button>
            </Box>
            <Box
              p={"25px"}
              borderRadius={"20px"}
              m={"auto"}
              justifyContent={"space-between"}
            >
              {/* main cart data rendering  */}
              <VStack spacing={3}>
                {cartData?.map((el) => (
                  <Box
                    w={{ xl: "450px", lg: "450px", md: "80%", sm: "90%" }}
                    background="white"
                    borderRadius={8}
                    p="15px"
                  >
                    <Flex
                      alignItems={"top"}
                      justifyContent={"space-evenly"}
                      gap={"10px"}
                    >
                      <Box
                        p="5px 5px "
                        w={{
                          base: "40%",
                          sm: "40%",
                          md: "40%",
                          lg: "30%",
                          xl: "25%",
                        }}
                        h={{
                          base: "40%",
                          sm: "40%",
                          md: "40%",
                          lg: "30%",
                          xl: "25%",
                        }}
                        bg="white"
                        borderRadius={8}
                      >
                        <Image
                          src={el.product.image}
                          alt=""
                          w={"80px"}
                          h={"100%"}
                        />
                      </Box>
                      <Box w="60%" align="left">
                        <Text
                          fontSize={{
                            base: "18px",
                            sm: "18px",
                            md: "18px",
                            lg: "14px",
                            xl: "14px",
                          }}
                          fontWeight={"bold"}
                        >
                          {el.product.title}
                        </Text>
                        <Box
                          fontSize={{
                            base: "16px",
                            sm: "16px",
                            md: "16px",
                            lg: "12px",
                            xl: "12px",
                          }}
                        >
                          <Table>
                            <Thead>
                              <tr>
                                <td style={{marginRight:'4px'}}>Rent</td>
                                <td>Deposit</td>
                              </tr>
                            </Thead>
                            <Tbody>
                              <tr>
                                <td style={{marginRight:'4px'}}>{`₹${el.price * el.quantity}/month`}</td>
                                <td>₹ {el.product.price2 * el.quantity}</td>
                              </tr>
                            </Tbody>
                          </Table>
                        </Box>
                      </Box>
                      <Box p={"0px 4px 0px 4px"}>
                        <Button
                          bg={"transparent"}
                          _hover={{ bg: "transparent" }}
                        >
                          <ImBin onClick={() => handleDelete(el._id)} />
                        </Button>
                      </Box>
                    </Flex>
                    <Box
                      color="red"
                      textAlign="left"
                      fontSize="12px"
                      marginLeft="4px"
                    >
                      {el.product.quantity + el.quantity} Items left
                    </Box>

                    <Flex justifyContent={"space-between"} mt="20px" mb="20px">
                      <Box
                        w="45%"
                        borderRadius={5}
                        border="1px solid #9accd8"
                        display={"flex"}
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                        gap={"30px"}
                        cursor={"pointer"}
                      >
                        {el.quantity == 1 ? (
                          <Box></Box>
                        ) : (
                          <Box onClick={() => handleDecrement(el.product._id)}>
                            -
                          </Box>
                        )}
                        <Box>{el.quantity}</Box>
                        {el.product.quantity == 0 ? (
                          <Box></Box>
                        ) : (
                          <Box onClick={() => handleIncrement(el.product._id)}>
                            +
                          </Box>
                        )}
                      </Box>
                      <Box
                        w={"45%"}
                        border="1px solid #9accd8"
                        borderRadius={5}
                      >
                        <Box>{el.tenure} months</Box>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
          <Box
            width={{ base: "96%", sm: "96%", md: "96%", lg: "82%", xl: "82%" }}
            m={"auto"}
          >
            <Box
              background="white"
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              h="60px"
              p={4}
              borderRadius={8}
              align="left"
              m={"20px 10px"}
            >
              <Text fontSize="xl" color="grey">
                You are logged in
              </Text>
            </Box>
            <Box
              background="white"
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              h="60px"
              p={4}
              align="left"
              borderRadius={8}
              m={"20px 10px"}
            >
              <Text fontSize="xl" color="grey">
                Address and Payments
              </Text>
            </Box>
          </Box>
        </Box>
      }
    </Box>
  );
};

export default Cart;
