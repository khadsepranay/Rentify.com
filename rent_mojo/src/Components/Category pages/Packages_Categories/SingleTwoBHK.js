import { Button, Slider } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Navbar from "../CategoryPagesNavbar/Navbar";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SingleTwoBHKPage(){
    let [data,setData] = useState({})
    let {id} = useParams()
    let [value,setValue] = useState(100)

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://rent-mojo-server.onrender.com/2bhk/${id}`).then((res)=>{
            setData(res.data)
            setLoading(false)
        })
    },[])

    function handleChange(e){
      setValue(e.target.value)
    }
    let [loading,setLoading] = useState(false)
    if(loading){
      return (
        <Stack spacing={1} alignItems="center" marginTop="250px" height="100vh">
          <Skeleton variant="text" width={200} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      );
    }

    return(
        <Box sx={{marginTop:"90px"}}>
            <Navbar/>
        <Box sx={{display:"grid",gridTemplateColumns:"2fr 1fr",width:"97vw",margin:"auto",justifyContent:"space-between",gap:"30px"}}>
            <Box>
                <Box component="img" src={data.src}></Box>
            </Box>
            <Box sx={{padding:"25px 0px",width:"90%"}}>
                <Box sx={{fontSize:"22px",fontWeight:"600",color:"#313131"}}>{data.title}</Box>
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
                    <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid #c0c0c0",margin:"15px auto",fontSize:"20px",color:"#404040"}}>{value===100?data.price:data.price3}{data.desc}
                    <Box sx={{fontSize:"12px",textAlign:"center",color:"#808080"}}>Monthly Rent</Box>
                    </Box>
                    <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid #c0c0c0",margin:"15px auto",fontSize:"20px",color:"#404040"}}>{data.price2}-
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
        </Box>
        </Box>
    )
}

export default SingleTwoBHKPage