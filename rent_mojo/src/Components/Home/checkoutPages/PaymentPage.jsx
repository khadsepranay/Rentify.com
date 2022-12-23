// import React, { useEffect } from "react";
// import EmptyCart from "./EmptyCart";
// // import Singleitem from "./Singleitem"
// import { AiOutlineFileText } from "react-icons/ai";

// import { TbDiscount2 } from "react-icons/tb";

// import {
//   Box,
//   VStack,
//   Button,
//   Thead,
//   Tr,
//   Th,
//   Td,
//   Tbody,
//   Table,
//   HStack,
//   useToast,
//   Flex,
//   Text,
//   TableContainer,
//   Tfoot,
// } from "@chakra-ui/react";
// import { Icon } from "@chakra-ui/react";
// import { MdReceipt } from "react-icons/md";
// import { icons } from "react-icons/lib";
// import Singleitem from "./Singleitem";
// import { useNavigate } from "react-router-dom";
// import HomeNavbar from "../HomeNavbar";
// import { useDispatch, useSelector } from "react-redux";
// import { CartProduct } from "../../../Redux/cart/action";
// import { cartDelete } from "../../../Redux/cart/action";
// import { ImBin } from "react-icons/im";
// import { CircularProgress } from "@chakra-ui/react";
// const myarr = [{}];

// const PaymentPage = () => {
//   const dispatch = useDispatch();
//   const { loading, error, cart } = useSelector((state) => state.Item);
//   const initial = Number(0);
//   const sum = cart.reduce(
//     (accumulator, x) => accumulator + Number(x.price),
//     initial
//   );
//   const x = Math.floor((sum * 18) / 100);
//   console.log(x);
//   console.log(sum);
//   useEffect(() => {
//     dispatch(CartProduct());
//   }, [dispatch, sum]);
//   const handleDelete = (id) => {
//     dispatch(cartDelete(id));
//     window.location.reload(false);
//   };
//   const toast = useToast();
//   const navigate = useNavigate();
//   console.log(Date());

//   const paymentSuccessful = () => {
//     toast({
//       title: "Payment Successful",
//       description:
//         "Order will be delivered in 5 days, please continue Shopping.",
//       status: "success",
//       duration: 9000,
//       isClosable: true,
//       position: "top",
//     });
//     navigate("/");
//   };
//   if(loading){
//     return (
//         <CircularProgress
//           isIndeterminate
//           color="green.300"
//           mt={40}
//           size="100px"
//         />
//     )
//   }else if (error) {
//   return <h2>Error...</h2>;
// }
//   return (
//     <>
//       <Box mt={"90px"}>
//         <HomeNavbar />
//       </Box>
//       {/* <br />
// 			<br /> */}
//       {cart?.length != 0 ? 
       
//        (
//         <VStack>
//           <Box
//             pt="40px"
//             bg="#F5F7FA"
//             minH="650px"
//             width="100%"
//             borderRadius={8}
//           >
//             <Box width="1170px" margin="auto" borderRadius={8}>
//               <Flex justify="space-evenly" width="100%">
//                 <Box>
//                   <Box background="white" w="762px" h="332px" borderRadius={8}>
//                     <Text pl="20px" fontSize="lg" pt="15px" align="left">
//                       <AiOutlineFileText /> Order Summary
//                     </Text>
//                     <br />
//                     {/* // ------------------------------------------------------------------------------- */}
//                     <Flex flexDir={{base:"column",sm:"column", lg:"row",xl:"row"}} gap={"30px"}  justifyContent={{base:"center",sm:"center",md:"space-evenly",lg:"space-evenly"}}>
//                       <Box
//                         border="1px solid #9accd8"
//                         h="100px"
//                         w="300px"
//                         borderRadius={5}
//                       >
//                         <TableContainer>
//                           <Table size="sm">
//                             <Thead>
//                               <Tr>
//                                 <Th>Payable Now</Th>
//                                 <Th></Th>
//                                 <Th isNumeric></Th>
//                               </Tr>
//                             </Thead>
//                             <Tbody>
//                               <Tr>
//                                 <Td>Refundable Deposit</Td>
//                                 <Td></Td>
//                                 <Td isNumeric>₹{Math.floor(sum * 1.25)}</Td>
//                               </Tr>
//                               <Tr>
//                                 <Td>Delivery Charges</Td>
//                                 <Td></Td>
//                                 <Td isNumeric>
//                                   {`₹${Math.floor(sum * 1.25) < 1000 ? 99 : 199}`}
//                                 </Td>
//                               </Tr>
//                             </Tbody>
//                           </Table>
//                         </TableContainer>
//                       </Box>

//                       <Box
//                         border="1px solid #9accd8"
//                         h="100px"
//                         w="300px"
//                         borderRadius={5}
//                       >
//                         <TableContainer>
//                           <Table size="sm">
//                             <Thead>
//                               <Tr>
//                                 <Th>Monthly Payable</Th>
//                                 <Th></Th>
//                                 <Th isNumeric>{}</Th>
//                               </Tr>
//                             </Thead>
//                             <Tbody>
//                               <Tr>
//                                 <Td>Products Rent</Td>
//                                 <Td></Td>
//                                 <Td isNumeric>₹{`${sum}/mo`}</Td>
//                               </Tr>
//                               <Tr>
//                                 <Td>GST</Td>
//                                 <Td></Td>
//                                 <Td isNumeric>₹{x}</Td>
//                               </Tr>
//                             </Tbody>
//                             <Tfoot>
//                               <Tr>
//                                 <Td>Total Monthly Rent</Td>
//                                 <Td></Td>
//                                 <Td isNumeric>₹{x + sum}</Td>
//                               </Tr>
//                             </Tfoot>
//                           </Table>
//                         </TableContainer>
//                       </Box>
//                     </Flex>

//                     <Box ml="30px" mt="100px" align="left">
//                       <Button
//                         size="lg"
//                         height="50px"
//                         width="300px"
//                         border="2px"
//                         color="white"
//                         background="red.500"
//                         onClick={paymentSuccessful}
//                       >
//                         <Text fontSize="xs" pr={20}>
//                           Payable Now <br />
//                           ₹<span>
//                             {Math.floor(sum * 1.25) < 1000
//                               ? 99 + Math.floor(sum * 1.25)
//                               : 199 + Math.floor(sum * 1.25)}
//                           </span>
//                         </Text>{" "}
//                         Proceed
//                       </Button>
//                     </Box>
//                   </Box>

//                   <br />
//                   <Box
//                     background="white"
//                     w="100%"
//                     h="60px"
//                     p={4}
//                     borderRadius={8}
//                     align="left"
//                   >
//                     <Text fontSize="xl" color="grey">
//                       {" "}
//                       You are logged in
//                     </Text>
//                   </Box>
//                   <br />
//                   <Box
//                     background="white"
//                     w="100%"
//                     h="60px"
//                     p={4}
//                     align="left"
//                     borderRadius={8}
//                   >
//                     <Text fontSize="xl" color="grey">
//                       {" "}
//                       Address and Payment
//                     </Text>
//                   </Box>
//                 </Box>
//                 <Box>
//                   <Box w="342px" h="60px" display="flex">
//                     <Box> </Box>
//                     <Box
//                       background="white"
//                       borderRadius={5}
//                       w="100%"
//                       p={1}
//                       display="block"
//                     >
//                       <Text color="grey" fontSize="lg" p={3}>
//                         {" "}
//                         Have a coupon code
//                       </Text>
//                     </Box>
//                   </Box>

//                   <br />
//                   {/* -------------------------------------------------------------
//                ----------- -------------------------------------------------- */}
//                   {/* main cart items start here */}

//                   <VStack spacing={3}>
//                     {cart?.map((el) => (
//                       <Box
//                         w="342px"
//                         background="white"
//                         borderRadius={8}
//                         p="5px 15px"
//                       >
//                         <Flex>
//                           <Box p="5px 5px " w="25%" bg="white" borderRadius={8}>
//                             <img src={el.img} alt="" />
//                           </Box>
//                           <Box w="60%" bg="white">
//                             <Text align="left" pl="5px">
//                               {el.title}
//                             </Text>
//                             <Box>
//                               <Table>
//                                 <Thead>
//                                   <tr>
//                                     <td>Rent</td>
//                                     <td>Deposit</td>
//                                   </tr>
//                                 </Thead>
//                                 <Tbody>
//                                   <tr>
//                                     <td>{`₹${sum}/mo`}</td>
//                                     <td>₹{Math.floor(sum * 1.25)}</td>
//                                   </tr>
//                                 </Tbody>
//                               </Table>
//                             </Box>
//                           </Box>
//                           <Box p="4px" w="18%">
//                             <Button onClick={() => handleDelete(el.id)}>
//                               <ImBin />
//                             </Button>
//                           </Box>
//                         </Flex>

//                         <HStack spacing="24px" mt="20px" mb="20px">
//                           <Box
//                             w="40%"
//                             ml="20px"
//                             h="42px"
//                             border="1px solid #9accd8"
//                             borderRadius={5}
//                           >
//                             <Button>-</Button>1
//                             <Button>+</Button>
//                           </Box>
//                           <Box
//                             w="40%"
//                             mr="20px"
//                             h="40px"
//                             border="1px solid #9accd8"
//                             borderRadius={5}
//                           >
//                             <select name="" id="" color="white">
//                               <option value="">12 months</option>
//                               <option value="">6 months</option>
//                               <option value="">3 months</option>
//                             </select>
//                           </Box>
//                         </HStack>
//                       </Box>
//                     ))}
//                   </VStack>

//                   <Text> Delivery by 19th Nov 2022</Text>
//                 </Box>
//               </Flex>
//             </Box>
//           </Box>
//         </VStack>
//       ): <EmptyCart />}
//     </>
//   );
// };

// export default PaymentPage;
