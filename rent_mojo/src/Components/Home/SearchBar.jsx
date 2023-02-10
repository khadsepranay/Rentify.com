import { Box, Flex, HStack, Image, Input, Text, VStack } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "@chakra-ui/react"

export const SearchBar = ({ handleChange, filterData, searchValue, setSearchValue }) => {

    return (
        <div>
            <Box alignItems={'center'} border={'1px solid lightgray'} borderRadius={'10px'} width={{ base: '180px', md: '400px', lg: '420px',xl:"560px" }} marginLeft={{ md: '10px', lg: '20px' }} backgroundColor={'#fafafa'} _hover={{ backgroundColor: "transparent" }}>
                <VStack>
                    <Flex justifyContent={'space-between'} width={"100%"} alignItems={'center'}>
                        <Input type="search" placeholder="Search for products" border={'none'} focusBorderColor={'none'} onChange={(e) => handleChange(e)} value={searchValue} />
                        <IoSearchOutline style={{ marginRight: "10px" }} />
                    </Flex>
                    {
                       filterData.length == 0 || searchValue=="" ? <Box display={"none"}></Box> :
                    <Box position={"absolute"} top={"40px"}  border={'1px solid lightgray'} borderBottomRadius={"10px"} overflow={'scroll'} height={"xs"} backgroundColor={"white"} padding={"10px"} width={{ base: '180px', md: '400px', lg: '420px',xl:"560px" }} css={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                        }
                    }}>
                        {
                            filterData && filterData.map((el) => (
                                <Link key={el._id} href={`/${el.category}/${el.sub_category}/${el._id}`} style={{textDecoration:'none'}} onClick={()=>setSearchValue(null)}>
                                   <Box style={{marginBottom:'5px',display:'flex',justifyContent:'space-between'}} _hover={{backgroundColor:'red',color:'white'}}>
                                    <Text align="left" paddingLeft={'3px'}>{el.title}</Text>
                                    <Image src={el.image} style={{width:'50px',height:'27px'}}/>
                                   </Box>
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