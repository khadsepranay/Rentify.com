import { Box, Input } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5"
import { useState, useEffect } from "react"
import axios from "axios"

export const SearchBar = () => {
    let [searchValue,setSearchValue] = useState("")
    let [data,setData] = useState([])
    let [filterData,setFilterData] = useState([])
    function handleChange(e){
        setSearchValue(e.target.value)
    }

    useEffect(()=>{
        axios.get("https://rent-mojo-server.onrender.com/entire").then((res)=>{
            setData(res.data)
        })
    },[])

    useEffect(()=>{
        let newData = data
        let FilteredData = newData.filter((el)=>{
            return el.title.includes(searchValue)
        })
        setFilterData(FilteredData)
    },[searchValue])

    return (
        <div>
            <Box display={'flex'} alignItems={'center'} border={'1px solid lightgray'} borderRadius={'10px'} width={{base:'180px',md:'300px',lg:'510px'}} marginLeft={{md:'10px',lg:'20px'}} backgroundColor={'#fafafa'} _hover={{backgroundColor:"transparent"}}>
                <Input type="search" placeholder="Search for products" border={'none'} focusBorderColor={'none'} onChange={(e)=>handleChange(e)} />
                <IoSearchOutline style={{ marginRight: "10px" }} />
            </Box>
        </div>
    )
}