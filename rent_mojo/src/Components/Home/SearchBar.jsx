import { Box, Input } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5"

export const SearchBar = () => {
    return (
        <div>
            <Box display={'flex'} alignItems={'center'} border={'1px solid lightgray'} borderRadius={'10px'} width={{base:'180px',md:'300px',lg:'510px'}} marginLeft={{md:'10px',lg:'20px'}} backgroundColor={'#fafafa'} _hover={{backgroundColor:"transparent"}}>
                <Input type="search" placeholder="Search for products" border={'none'} focusBorderColor={'none'} />
                <IoSearchOutline style={{ marginRight: "10px" }} />
            </Box>
        </div>
    )
}