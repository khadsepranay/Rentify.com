import { Button, Slider } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Navbar from "../Category pages/CategoryPagesNavbar/Navbar";
import Loader from "../Category pages/Loader";
import {ChakraProvider} from "@chakra-ui/react"
import { useLocation } from "react-router-dom";
import HomeNavbar from "./HomeNavbar"

export const SingleSearchData = () => {

    let location = useLocation();
    let Pathname = location.pathname
    let arr = Pathname.trim().split("/")
    let [data,setData] = useState([])
    console.log(data)
    let [value,setValue] = useState(100)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://rent-mojo-server.onrender.com/entire").then((res)=>{
            let data = res.data
            let FilteredData = data.filter((el)=>{
                return(
                    el.title.includes(arr[2])
                )
            })
            setData(FilteredData)
            setLoading(false)
        })
    },[])

    function handleChange(e){
      setValue(e.target.value)
    }
    let [loading,setLoading] = useState(false)
    if(loading){
      return (
        <ChakraProvider><Loader/></ChakraProvider>
      );
    }
    

    return (
        <Box>
            <ChakraProvider><HomeNavbar/></ChakraProvider>
        <Box sx={{marginTop:"90px"}}>
            {
                data && data.map((el)=>{
                    return(
                    <Box sx={{display:"grid",gridTemplateColumns:"2fr 1fr",width:"97vw",margin:"auto",justifyContent:"space-between",gap:"30px"}}>
                    <Box>
                        <Box component="img" src={el.src}></Box>
                    </Box>
                    <Box sx={{padding:"25px 0px",width:"90%"}}>
                        <Box sx={{fontSize:"22px",fontWeight:"600",color:"#313131"}}>{el.title}</Box>
                        <Box sx={{margin:"25px 0px"}}>
                        <Slider
                          aria-label="Custom marks"
                          defaultValue={100}
                          value={value}
                          onChange={(e)=>handleChange(e)}
                          step={50}
                          sx={{color:"#FF6464"}}
                        />
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{color:"#313131"}}>3+</Box>
                            <Box sx={{color:"#313131"}}>6+</Box>
                            <Box sx={{color:"#313131"}}>12+</Box>
                        </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid #c0c0c0",margin:"15px auto",fontSize:"20px",color:"#404040"}}>{value===100?el.price:el.price2}{el.desc}
                            <Box sx={{fontSize:"12px",textAlign:"center",color:"#808080"}}>Monthly Rent</Box>
                            </Box>
                            <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid #c0c0c0",margin:"15px auto",fontSize:"20px",color:"#404040"}}>{el.price2}-
                            <Box sx={{fontSize:"12px",textAlign:"center",color:"#808080"}}>Refundable Deposit</Box>
                            </Box>
                        </Box>
                            <Box sx={{display:"flex",justifyContent:"space-around",border:"1px solid #c0c0c0",padding:"5px",margin:"20px 0px"}}>
                                <Box>7 days free trial</Box>
                                <Box>Free Relocation</Box>
                                <Box>Free Upgrade</Box> 
                            </Box>
                            <Box sx={{margin:"20px auto"}}>
                            <Button sx={{backgroundColor:"red",color:"white",width:"100%",margin:"45px auto",":hover":{backgroundColor:"#FF6464"}}}>Book Your Plan</Button>
                            </Box>
                    </Box>
                    <br/>
                </Box>
                    )
                })
            }
        </Box>
        </Box>
    )
}