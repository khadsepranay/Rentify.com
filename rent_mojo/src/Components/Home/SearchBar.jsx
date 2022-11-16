import { Box, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "@chakra-ui/react"

export const SearchBar = ({ handleChange, filterData, searchValue }) => {

    return (
        <div>
            <Box alignItems={'center'} border={'1px solid lightgray'} borderRadius={'10px'} width={{ base: '180px', md: '300px', lg: '510px' }} marginLeft={{ md: '10px', lg: '20px' }} backgroundColor={'#fafafa'} _hover={{ backgroundColor: "transparent" }}>
                <VStack>
                    <Flex justifyContent={'space-between'} width={"100%"} alignItems={'center'}>
                        <Input type="search" placeholder="Search for products" border={'none'} focusBorderColor={'none'} onChange={(e) => handleChange(e)} />
                        <IoSearchOutline style={{ marginRight: "10px" }} />
                    </Flex>
                    {
                       filterData.length == 0 || searchValue=="" ? <Box display={"none"}></Box> :
                    <Box position={"absolute"} top={"40px"} left="36.8%" border={'1px solid lightgray'} borderBottomRadius={"10px"} overflow={'scroll'} height={"xs"} backgroundColor={"white"} padding={"20px"} width={{ base: '180px', md: '300px', lg: '510px' }} css={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                        }
                    }}>
                        {
                            filterData && filterData.map((el) => (
                                <Link href={`/SingleRoomData/${searchValue}`}>
                                   <Box><Text align="left">{el.title}</Text></Box>
                                </Link>
                            )
                            )
                        }
                    </Box>
                    }
                </VStack>
            </Box >
        </div >
    )
}