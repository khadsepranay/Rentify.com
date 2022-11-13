import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import React,{useEffect, useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../CategoryPagesNavbar/Navbar";
import HomeNavbar from "../../Home/HomeNavbar";
import {ChakraProvider} from "@chakra-ui/react"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Livingroom() {
  let [packageRoomData,setPackageRoomData] = useState([])
  let [packageApartData,setPackageApartData] = useState([])
  let [data,setData] = useState([])
  let [close,setClose] = useState(false)
  let [value,setValue] = useState(100)
  let [reset,setReset] = useState(true)

  useEffect(()=>{
    setLoading(true)
    axios.get("http://rent-mojo-server.onrender.com/packagesRoom").then((res)=>{
      let data = res.data
      setPackageRoomData(data)
    })
    axios.get("http://rent-mojo-server.onrender.com/packagesApart").then((res)=>{
      let data = res.data
      setPackageApartData(data)
    })
    axios.get("http://rent-mojo-server.onrender.com/livingroom").then((res)=>{
      setData(res.data)
      setClose(false)
      setLoading(false)
    })
  },[])

  function handleChange(e){
    setValue(e.target.value)
  }

  function ResetData(){
    axios.get("http://rent-mojo-server.onrender.com/entire").then((res)=>{
      setData(res.data)
      setClose(true)
      setReset(false)
    })
  }

  function getData(){
    axios.get("http://rent-mojo-server.onrender.com/livingroom").then((res)=>{
      setReset(true)
      setData(res.data)
      setClose(false)
    })
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
  

  return (
    <Box sx={{ width: "100vw", height: "100%", marginTop: "90px", padding: "0px" }}>
      <ChakraProvider><HomeNavbar/></ChakraProvider>
      <Navbar/>
      <Box sx={{ width: {xl:"80vw",lg:"80vw",md:"90vw",sm:"90vw"}, margin: "40px auto 0px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: {xl:"1fr 3fr",lg:"1fr 3fr",md:"1fr 3fr",sm:"2fr 5fr"}, gap:{xl:"40px",lg:"5px",md:"0px",sm:"0px"} }}>
          <Box sx={{width:{xl:"100%",lg:"90%",md:"90%",sm:"90%",xs:"90%"},margin:"auto"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
              <Box>
                <Box
                  component="img"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNi4zNDggMTIuMDAybDMuMzU0IDMuMDM2di04Ljc2YS4yOS4yOSAwIDAgMSAuMDgtLjE5OUwxNS4wMTYuNTc4SC45NjlsNS4yOTggNS41YS4yODcuMjg3IDAgMCAxIC4wOC4ydjUuNzI0em0zLjY0NCAzLjk3N2EuMjg0LjI4NCAwIDAgMS0uMTk0LS4wNzZsLTMuOTMzLTMuNTU5YS4yOS4yOSAwIDAgMS0uMDk1LS4yMTRWNi4zOTVMLjA4LjQ4OUEuMjkuMjkgMCAwIDEgLjI5IDBoMTUuNGMuMTE3IDAgLjIyLjA2OS4yNjYuMTc1YS4yODcuMjg3IDAgMCAxLS4wNTYuMzEzbC01LjYyIDUuOTA2djkuMjk2YS4yOS4yOSAwIDAgMS0uMjkuMjg5eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0RGREZERiIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjMzEzMTMxIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNLTEtMWgxOHYxOEgtMXoiLz48L2c+PC9nPjwvc3ZnPg=="
                />
                <span style={{color:"gray"}}>Filters</span>
              </Box>
              <Button sx={{color:"white",padding:"5px 25px",fontWeight:"500",backgroundColor:"#dd0000",":hover":{backgroundColor:"green"}}} onClick={()=>ResetData()}>Reset</Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                boxShadow:"1px 2px 10px #e0e0e0",
                marginTop: "30px",
                padding:"15px",
                margin:"25px auto"
              }}
            >
              <Box sx={{color:"#808080",fontSize:{xl:"14px",lg:"14px",md:"13px",sm:"12px"},fontWeight:"500"}}>CHOOSE RENTAL TENURE</Box>
              <Box sx={{ marginTop:"10px" }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={100}
                  value={value}
                  onChange={(e)=>handleChange(e)}
                  step={50}
                  sx={{width:{xl:"95%",lg:"95%",md:"95%",sm:"95%"},color:"#00BCBC"}}
                />
                <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                    <Box sx={{color:"#330019"}}>3+</Box>
                    <Box sx={{color:"#330019"}}>6+</Box>
                    <Box sx={{color:"#330019"}}>12+</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{margin:"40px auto 10px",color:"#808080",fontWeight:"500"}}>Choose by Room Type</Box>
            <hr/>
            <Box sx={{display:"grid",gridTemplateColumns:{xl:"repeat(2,1fr)",lg:"repeat(2,1fr)",md:"repeat(1,1fr)",sm:"repeat(1,1fr)",xs:"repeat(1,1fr)"},justifyContent:"space-between",gap:{xl:"25px 20px",lg:"20px 5px",md:"25px",sm:"25px",xs:"25px"},marginTop:"20px",marginBottom:"30px",width:"100%"}}>
                {
                  packageRoomData && packageRoomData.map((el)=>{
                    return(
                     <Link to={`/packages/${el.endPoint}`} style={{textDecoration:"none",color:"#808080"}}>
                      {
                        el.name=="Livingroom" && reset?
                        <Box sx={{width:"100%",padding:"10px",textAlign:"center", backgroundColor:"white",color:"gray",borderBottom:"4px solid #00BCBC",boxShadow:"0.1px 8px 10px #e0e0e0"}}>
                           <Box component="img" src={el.logo} width={{xl:"25%",lg:"25%",md:"25%",sm:"25%",xs:"10%"}} margin="auto"/>
                           <Box sx={{fontSize:{xl:"14px",lg:"14px",md:"17px",sm:"16px",xs:"14px"},color:"#00BCBC",letterSpacing:0.4}}>{el.name}</Box>
                           <Box sx={{fontSize:{xl:"12px",lg:"12px",md:"15px",sm:"14px",xs:"12px"}}}>{el.NOP} Packages</Box>
                         </Box>:
                      <Box sx={{width:"100%",padding:"10px",textAlign:"center",border:"1px solid #e0e0e0"}} onClick={()=>getData()}>
                      <Box component="img" src={el.logo} width={{xl:"25%",lg:"25%",md:"25%",sm:"25%",xs:"10%"}} margin="auto"/>
                      <Box sx={{fontSize:{xl:"14px",lg:"14px",md:"17px",sm:"16px",xs:"14px"},letterSpacing:0.4}}>{el.name}</Box>
                      <Box sx={{fontSize:{xl:"12px",lg:"12px",md:"15px",sm:"14px",xs:"12px"}}}>{el.NOP} Packages</Box>
                    </Box>
                      }
                      </Link>
                    )
                  })
                }
            </Box>
            <Box sx={{margin:"40px auto 10px",color:"#808080",fontWeight:"500"}}>Choose by Apartment Type</Box>
            <hr/>
            <Box sx={{display:"grid",gridTemplateColumns:{xl:"repeat(2,1fr)",lg:"repeat(2,1fr)",md:"repeat(1,1fr)"},gap:{xl:"25px 20px",lg:"20px 5px",md:"25px",sm:"25px",xs:"25px"},marginTop:"20px",marginBottom:"30px",width:"100%"}}>
                {
                  packageApartData && packageApartData.map((el)=>{
                    return(
                     <Link to={`/packages/${el.endPoint}`} style={{textDecoration:"none",color:"#808080"}}>
                      {
                        el.name=="Livingroom"?
                        <Box sx={{width:"100%",padding:"10px",textAlign:"center", backgroundColor:"white",color:"gray",borderBottom:"4px solid #00BCBC",boxShadow:"0.1px 8px 10px #e0e0e0"}}>
                           <Box component="img" src={el.logo} width={{xl:"25%",lg:"25%",md:"25%",sm:"25%",xs:"10%"}} margin="auto"/>
                           <Box sx={{fontSize:{xl:"14px",lg:"14px",md:"17px",sm:"16px",xs:"14px"},color:"#00BCBC",letterSpacing:0.4}}>{el.name}</Box>
                           <Box sx={{fontSize:{xl:"12px",lg:"12px",md:"15px",sm:"14px",xs:"12px"}}}>{el.NOP} Packages</Box>
                         </Box>:
                      <Box sx={{width:"100%",padding:"10px",textAlign:"center",border:"1px solid #e0e0e0"}} onClick={()=>getData()}>
                      <Box component="img" src={el.logo} width={{xl:"25%",lg:"25%",md:"25%",sm:"25%",xs:"10%"}} margin="auto"/>
                      <Box sx={{fontSize:{xl:"14px",lg:"14px",md:"17px",sm:"16px",xs:"14px"},letterSpacing:0.4}}>{el.name}</Box>
                      <Box sx={{fontSize:{xl:"12px",lg:"12px",md:"15px",sm:"14px",xs:"12px"}}}>{el.NOP} Packages</Box>
                    </Box>
                      }
                      </Link>
                    )
                  })
                }
            </Box>
          </Box>
          <Box>
            <Box>
            </Box>
            {
              close?(<Box></Box>):(<Box sx={{width:"120px",height:"32px",backgroundColor:"#F2ECEC",color:"gray",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",gap:"5px",marginBottom:"28px",marginLeft:{xl:"22px",lg:"35px",md:"35px",sm:"25px",xs:"25px"}}}>Livingroom<CloseIcon sx={{width:"20px",marginTop:"2px",cursor:"pointer"}} onClick={()=>ResetData()}/></Box>)
            }
          <Box sx={{display:"grid",gridTemplateColumns:{xl:"repeat(2,1fr)",lg:"repeat(1,1fr)"},gap:"15px",height:"130vh",overflow:"scroll","&::-webkit-scrollbar":{width:"1px"}}}>
            {
              data && data.map((el)=>{
                return(
                  <Link to={`/packages/livingroom/${el.id}`} style={{textDecoration:"none"}}>
                  <Box sx={{border:"1px solid #e6e6e6",color:"#313131",margin:"auto",":hover":{boxShadow:"2px 5px 8px #e0e0e0"},transition:"0.3s",width:"90%"}}>
                  <Box component="img" src={el.src} width="100%"></Box>
                  <Box sx={{padding:{xl:"25px",lg:"25px 20px",md:"25px 15px",sm:"25px 10px"},margin:{xl:"0px",lg:"auto 130px",md:"auto 20px",sm:"auto 0px"}}}>
                  <Box sx={{fontWeight:"400",fontSize:{xl:"18px",lg:"20px",md:"18px",sm:"15px"},color:"#606060",marginTop:"-13px",textAlign:{xl:"left",lg:"center",md:"center",sm:"center"}}}>{el.title}</Box>
                  <Box style={{border:"0.1px solid #e0e0e0",margin:"15px auto 25px"}}></Box>
                  <Box sx={{display:"flex", justifyContent:{xl:"space-between",lg:"space-around",md:"space-around",sm:"space-around"},margin:"-8px auto -15px"}}>
                    <Box>
                      <span>{value==100?el.price:el.price2}</span><span>{el.desc}</span>
                    </Box>
                    <Box sx={{display:"flex"}}>
                      <Box component="img" src={el.logo} style={{width:"30px",height:"30px",borderRadius:"50%",border:"1px solid gray",padding:"5px",boxSizing:"border-box",marginRight:"10px"}}/><Box sx={{float:"right",marginTop:"2px"}}>{el.items}</Box>
                    </Box>
                  </Box>
                  </Box>
                  </Box>
                  </Link>
                )
              })
            }
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Livingroom;
