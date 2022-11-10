import { Button, Slider } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function SingleBedroomPage(){
    let [data,setData] = useState({})
    let {id} = useParams()
    let [value,setValue] = useState(100)

    useEffect(()=>{
        axios.get(`http://localhost:8000/bedroom/${id}`).then((res)=>{
            setData(res.data)
        })
    },[])

    function handleChange(e){
      setValue(e.target.value)
    }

    return(
        <Box sx={{display:"grid",gridTemplateColumns:"3fr 1fr",width:"95vw",margin:"100px auto"}}>
            <Box>
                <Box component="img" src={data.src}></Box>
            </Box>
            <Box sx={{}}>
                <Box>{data.title}</Box>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={100}
                  value={value}
                  onChange={(e)=>handleChange(e)}
                  step={50}
                />
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Box sx={{color:"#313131"}}>3+</Box>
                    <Box sx={{color:"#313131"}}>6+</Box>
                    <Box sx={{color:"#313131"}}>12+</Box>
                </Box>
                <Box sx={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}}>
                    <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid gray",margin:"15px auto"}}>{value===100?data.price:data.price2}/{data.desc}
                    <Box>Monthly Rent</Box>
                    </Box>
                    <Box sx={{boxSizing:"border-box",padding:"15px",border:"1px solid gray",margin:"15px auto"}}>{data.price2}/{data.desc}
                    <Box>Refundable Deposit</Box>
                    </Box>
                </Box>
                    <Box sx={{display:"flex",justifyContent:"space-around"}}>
                        <Box>7 days free trial</Box>
                        <Box>Free Relocation</Box>
                        <Box>Free Upgrade</Box> 
                    </Box>
                    <Box sx={{margin:"20px auto"}}>
                    <Box>Delivery by 16 Nov 2022</Box>
                    <Button sx={{backgroundColor:"red",color:"white",width:"80%",margin:"15px auto"}}>Book Your Plan</Button>
                    </Box>
            </Box>
        </Box>
    )
}

export default SingleBedroomPage