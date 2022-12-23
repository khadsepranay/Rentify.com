import { Box, Button, CircularProgress, Flex, HStack, Image, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast, VStack } from "@chakra-ui/react"
import { fontWeight } from "@mui/system"
import { useEffect } from "react"
import { AiOutlineFileText } from "react-icons/ai"
import { ImBin } from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartDelete, CartProduct, IncDecQty } from "../../../Redux/cart/action"
import HomeNavbar from "../HomeNavbar";
import EmptyCart from "./EmptyCart";
import { BsDashLg, BsPlusCircle, BsPlusLg } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

const myarr = [{}];

export const CartPay = () => {

    const dispatch = useDispatch();
    const { loading, error, cart } = useSelector((state) => state.Item);
    const initial = Number(0);

    const sum = cart?.reduce(
        (accumulator, x) => accumulator + (Number(x.price)*Number(x.qty)),
        initial
    );

    const x = Math.floor((sum * 18) / 100);
    console.log(x);
    console.log(sum);

    useEffect(() => {
        dispatch(CartProduct());
    }, [dispatch, sum]);

    const handleDelete = (id) => {
        dispatch(cartDelete(id));
        window.location.reload();
    };

    const toast = useToast();
    const navigate = useNavigate();
    console.log(Date());

    const paymentSuccessful = () => {
        toast({
            title: "Payment Successful",
            description:
                "Order will be delivered in 5 days, please continue Shopping.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
        });
        navigate("/");
    };

    const handleIncQty = (el) => {
        el.qty++;
        console.log("Inc",el.qty)
        dispatch(IncDecQty(el))
    }

    const handleDecQty = (el) => {
        el.qty--;
        console.log("dec",el.qty)
        dispatch(IncDecQty(el))
    }

    if (loading) {
        return (
            <CircularProgress
                isIndeterminate
                color="green.300"
                mt={40}
                size="100px"
            />
        )
    } else if (error) {
        return <h2>Error...</h2>;
    }

    return (
        <Box>
            <Box mt={"60px"}>
                <HomeNavbar />
            </Box>
            {
                cart?.length != 0 ?
                    <Box bg={"#F5F7FA"} width={"100%"} padding={"50px 0px 50px 0px"}>
                        <Box  display={"flex"} justifyContent={"space-between"} width={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }} margin={"auto"} mt={"10px"} flexDir={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row" }} gap={"15px"} fontFamily={"sans-serif"}>
                            <Box width={{ base: "95%", sm: "95%", md: "95%", lg: "65%", xl: "65%" }} background="white" p={"25px"} borderRadius={"20px"} m={"auto"}>
                                <Box >
                                    <Flex alignItems={"center"} gap={"5px"} margin={"0px 0px 30px"}>
                                        <AiOutlineFileText />
                                        <Text fontSize="14px" align="left" fontFamily={"sans-serif"}>
                                            Order Summary
                                        </Text>
                                    </Flex>
                                    <Flex gap={"20px"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row" }}>
                                        <Box border={"1px solid #9accd8"} width={{ base: "100%", sm: "100%", md: "100%", lg: "48%", xl: "48%" }} height={"150px"} textAlign={"left"} lineHeight={"2.5"} p={"20px"} borderRadius={"10px 15px"}>
                                            <Text fontSize={"14px"} fontWeight={"bold"}>Payable Now</Text>
                                            <hr />
                                            <Flex justifyContent={"space-between"} mt={"10px"}>
                                                <Text fontSize={"12px"}>Refundable Deposit</Text>
                                                <Text fontSize={"12px"}>₹{Math.floor(sum * 1.25)}</Text>
                                            </Flex>
                                            <Flex justifyContent={"space-between"}>
                                                <Text fontSize={"12px"}>Delivery Charges</Text>
                                                <Text fontSize={"12px"}>{`₹${Math.floor(sum * 1.25) < 1000 ? 99 : 199}`}</Text>
                                            </Flex>
                                        </Box>
                                        <Box border={"1px solid #9accd8"} width={{ base: "100%", sm: "100%", md: "100%", lg: "48%", xl: "48%" }} textAlign={"left"} lineHeight={"2.5"} p={"20px"} borderRadius={"10px 15px"}>
                                            <Text fontSize={"14px"} fontWeight={"bold"}>Monthly Payable</Text>
                                            <hr />
                                            <Flex justifyContent={"space-between"} mt={"10px"}>
                                                <Text fontSize={"12px"}>Product Rent</Text>
                                                <Text fontSize={"12px"} >₹{`${sum}/mo`}</Text>
                                            </Flex>
                                            <Flex justifyContent={"space-between"} mb={"10px"}>
                                                <Text fontSize={"12px"}>GST</Text>
                                                <Text fontSize={"12px"}>₹{x}</Text>
                                            </Flex>
                                            <hr />
                                            <Flex justifyContent={"space-between"} py={"10px"}>
                                                <Text fontSize={"12px"}>Total Monthly Rent</Text>
                                                <Text fontSize={"12px"}>₹{x + sum}</Text>
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
                                    width={{ base: "100%", sm: "100%", md: "70%", lg: "300px", xl: "300px" }}
                                    margin={"20px -35.525px 0px 0px"}
                                    onClick={paymentSuccessful}
                                    _hover={{bg:"#DC3226"}}
                                >
                                    <Box>
                                        <Text fontSize={"12px"}>
                                            ₹{Math.floor(sum * 1.25) < 1000
                                                ? 99 + Math.floor(sum * 1.25)
                                                : 199 + Math.floor(sum * 1.25)}
                                        </Text>
                                        <Text fontSize={"12px"}>Payable Now</Text>
                                    </Box>
                                    <Text fontSize={"14px"}>Proceed</Text>
                                </Button>

                            </Box>
                            <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "35%", xl: "35%" }} p={"25px"} borderRadius={"20px"} m={"auto"}>
                                {/* main cart data rendering  */}
                                <VStack spacing={3}>
                                    {cart?.map((el) => (
                                        <Box
                                            w="100%"
                                            background="white"
                                            borderRadius={8}
                                            p="5px 15px"
                                        >
                                            <Flex alignItems={"top"} justifyContent={"space-evenly"}>
                                                <Box p="5px 5px " w={{base:"40%",sm:"40%",md:"40%",lg:"30%",xl:"25%"}} h={{base:"40%",sm:"40%",md:"40%",lg:"30%",xl:"25%"}} bg="white" borderRadius={8}>
                                                    <Image src={el.img} alt="" w={"100%"} h={"100%"} />
                                                </Box>
                                                <Box w="60%" align="left">
                                                    <Text fontSize={{base:"18px",sm:"18px",md:"18px",lg:"14px",xl:"14px"}} fontWeight={"bold"}>
                                                        {el.title}
                                                    </Text>
                                                    <Box fontSize={{base:"16px",sm:"16px",md:"16px",lg:"12px",xl:"12px"}}>
                                                        <Table>
                                                            <Thead>
                                                                <tr>
                                                                    <td>Rent</td>
                                                                    <td>Deposit</td>
                                                                </tr>
                                                            </Thead>
                                                            <Tbody>
                                                                <tr>
                                                                    <td>{`₹${sum}/mo`}</td>
                                                                    <td>₹{Math.floor(sum * 1.25)}</td>
                                                                </tr>
                                                            </Tbody>
                                                        </Table>
                                                    </Box>
                                                </Box>
                                                <Box p={"0px 4px 0px 4px"}>
                                                    <Button bg={"transparent"} _hover={{ bg: "transparent" }} onClick={() => handleDelete(el.id)}>
                                                        <ImBin />
                                                    </Button>
                                                </Box>
                                            </Flex>

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
                                                    <BsDashLg onClick={()=>handleDecQty(el)}/>
                                                    <Box>{el.qty}</Box>
                                                    <BsPlusLg onClick={()=>handleIncQty(el)}/>
                                                </Box>
                                                <Box w={"45%"} border="1px solid #9accd8" borderRadius={5}>
                                                    <Select name="" id="" w={"100%"} border={"none"} focusBorderColor={"transparent"}>
                                                        <option value="">12 months</option>
                                                        <option value="">6 months</option>
                                                        <option value="">3 months</option>
                                                    </Select>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        </Box>
                        <Box width={{ base: "96%", sm: "96%", md: "96%", lg: "82%", xl: "82%" }} m={"auto"}>
                            <Box
                                background="white"
                                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
                                h="60px"
                                p={4}
                                borderRadius={8}
                                align="left"
                                m={"20px 10px"}
                            >
                                <Text fontSize="xl" color="grey">
                                    {" "}
                                    You are logged in
                                </Text>
                            </Box>
                            <Box
                                background="white"
                                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
                                h="60px"
                                p={4}
                                align="left"
                                borderRadius={8}
                                m={"20px 10px"}
                            >
                                <Text fontSize="xl" color="grey">
                                    {" "}
                                    Address and Payment
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <EmptyCart />
            }
        </Box>
    )
}