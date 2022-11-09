import { Box, Input } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5"

export const SearchBar = () => {
    return (
        <div>
            <Box display={'flex'} alignItems={'center'} border={'1px solid lightgray'} borderRadius={'10px'} width={{base:'200px',md:'300px',lg:'520px'}} marginLeft={{md:'10px',lg:'25px'}} backgroundColor={'#fafafa'} _hover={{backgroundColor:"transparent"}}>
                <Input type="search" placeholder="Search for products" border={'none'} focusBorderColor={'none'} />
                <IoSearchOutline style={{ marginRight: "10px" }} />
            </Box>
        </div>
    )
}