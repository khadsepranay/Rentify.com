// import React, { useState } from 'react'
// import { ImBin } from 'react-icons/im';
// import {
//     Box,
//     Spacer,
//     Container,
//     Flex,
//     Text,
//     VStack,
//     Button,
//     TableContainer,
//     Thead,
//     Tr,
//     Th,
//     Td,
//     Tbody,
//     Table,
//     Tfoot,
//     HStack,
// } from "@chakra-ui/react";
// const Singleitem = ({ title, image, price}) => {
//     const [count, setCount] = useState(1)
//     const [gst, setGst] = useState(1)
//     const [delivery, setDelivery] = useState(99)

//     console.log('price' + price)

//     const handlecount = (price) => {
//         setCount(count + 1)
//         setGst(price * (0.18))
//         console.log('price', price)
//         console.log("gst", gst)
//         console.log("delivery", delivery)
//     }

//     return (
//         <>
//             <Box w="342px" background="white" borderRadius={8} p='5px 15px'>
//                 <Flex>
//                     <Box p='5px 5px ' w="25%" bg="white" borderRadius={8}>
//                         < img
//                             src={image}
//                             // src="https://www.bing.com/th?id=OIP.VWntdNQnY7yJ4Xxhm5D6SQHaHa&w=150&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
//                             alt=""
//                         />
//                     </Box>
//                     <Box w="60%" bg="white">
//                         <Text align="left" pl="5px">
//                             {title}
//                         </Text>
//                         <Box>
//                             <Table>
//                                 <Thead>
//                                     <tr>
//                                         <td>Rent</td>
//                                         <td>Deposit</td>
//                                     </tr>
//                                 </Thead>
//                                 <Tbody>
//                                     <tr>
//                                         <td>{"₹" + price + "/mo"}</td>
//                                         <td>{"₹" + price}</td>
//                                     </tr>
//                                 </Tbody>
//                             </Table>
//                         </Box>
//                     </Box>
//                     <Box p='4px' w="18%" >
//                         <Button><ImBin /></Button>
//                     </Box>
//                 </Flex>

//                 <HStack spacing="24px" mt="20px" mb="20px">
//                     <Box w="40%" ml="20px" h="42px" border='1px solid #9accd8' borderRadius={5}>
//                         <Button disabled={count == 1} onClick={() => setCount(count - 1)} >-</Button>
//                         {count}
//                         <Button onClick={() => handlecount()} >+</Button>
//                     </Box>
//                     <Box w="40%" mr="20px" h="40px" border='1px solid #9accd8' borderRadius={5}>
//                         <select name="" id="" color="white">
//                             <option value="">12 months</option>
//                             <option value="">6 months</option>
//                             <option value="">3 months</option>
//                         </select>
//                     </Box>
//                 </HStack>
//             </Box>
//         </>
//     )
// }

// export default Singleitem