import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const SingleSearchData = () => {

    let location = useLocation();
    console.log(location);
    let [data,setData] = useState([])
    axios.get("https://rent-mojo-server.onrender.com/entire").then((res)=>{
        setData(res.data)
    })
    console.log(data)

    return (
        <Box>
           
        </Box>
    )
}