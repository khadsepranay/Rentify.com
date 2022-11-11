import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import React,{useEffect, useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

function OneBHK() {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  let [packageRoomData,setPackageRoomData] = useState([])
  let [packageApartData,setPackageApartData] = useState([])
  let [data,setData] = useState([])
  let [close,setClose] = useState(false)
  let [value,setValue] = useState(100)

  useEffect(()=>{
    axios.get("http://localhost:8000/packagesRoom").then((res)=>{
      let data = res.data
      setPackageRoomData(data)
    })
    axios.get("http://localhost:8000/packagesApart").then((res)=>{
      let data = res.data
      setPackageApartData(data)
    })
    axios.get("http://localhost:8000/1bhk").then((res)=>{
      setData(res.data)
    })
  },[])

  function handleChange(e){
    setValue(e.target.value)
  }
  
  function ResetData(){
    setData([])
    setClose(true)
  }

  return (
    <Box sx={{ width: "100vw", height: "100%", margin: "0px", padding: "0px" }}>
      <Box sx={{ width: "75vw", margin: "144px auto 0px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 4fr", gap:"70px" }}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Box
                  component="img"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNi4zNDggMTIuMDAybDMuMzU0IDMuMDM2di04Ljc2YS4yOS4yOSAwIDAgMSAuMDgtLjE5OUwxNS4wMTYuNTc4SC45NjlsNS4yOTggNS41YS4yODcuMjg3IDAgMCAxIC4wOC4ydjUuNzI0em0zLjY0NCAzLjk3N2EuMjg0LjI4NCAwIDAgMS0uMTk0LS4wNzZsLTMuOTMzLTMuNTU5YS4yOS4yOSAwIDAgMS0uMDk1LS4yMTRWNi4zOTVMLjA4LjQ4OUEuMjkuMjkgMCAwIDEgLjI5IDBoMTUuNGMuMTE3IDAgLjIyLjA2OS4yNjYuMTc1YS4yODcuMjg3IDAgMCAxLS4wNTYuMzEzbC01LjYyIDUuOTA2djkuMjk2YS4yOS4yOSAwIDAgMS0uMjkuMjg5eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0RGREZERiIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjMzEzMTMxIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNLTEtMWgxOHYxOEgtMXoiLz48L2c+PC9nPjwvc3ZnPg=="
                />
                <span>Filters</span>
              </Box>
              <Button>Reset</Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100px",
                border: "1px solid black",
                marginTop: "30px",
                padding:"15px 0px 0px 20px",
                margin:"25px auto 25px -10px"
              }}
            >
              <Box sx={{color:"#313131"}}>Choose Rental Tenure</Box>
              <Box sx={{ width: 230, marginTop:"10px" }}>
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
              </Box>
            </Box>
            <Box sx={{margin:"20px auto"}}>Choose by Room Type</Box>
            <Box sx={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"25px 15px",margin:"10px auto 60px"}}>
                {
                  packageRoomData && packageRoomData.map((el)=>{
                    return(
                      <Link to={`/packages/${el.endPoint}`} style={{textDecoration:"none",color:"#808080"}}>
                       {
                         el.name=="1 BHK"?
                         <Box sx={{width:"100px",padding:"10px",textAlign:"center", backgroundColor:"#F5FAFF",color:"gray",borderBottom:"4px solid #0080ff",boxShadow:"0.1px 8px 10px #e0e0e0"}}>
                            <Box component="img" src={el.logo} width="25%"/>
                            <Box sx={{fontSize:"12px",color:"#0080ff",letterSpacing:0.4}}>{el.name}</Box>
                            <Box sx={{fontSize:"11px"}}>{el.NOP} Packages</Box>
                          </Box>:
                       <Box sx={{width:"100px",padding:"10px",textAlign:"center",border:"1px solid #e0e0e0"}}>
                       <Box component="img" src={el.logo} width="25%"/>
                       <Box sx={{fontSize:"12px",letterSpacing:0.4}}>{el.name}</Box>
                       <Box sx={{fontSize:"11px"}}>{el.NOP} Packages</Box>
                     </Box>
                       }
                       </Link>
                    )
                  })
                }
            </Box>
            <hr/>
            <Box sx={{margin:"20px auto"}}>Choose by Apartment Type</Box>
            <Box sx={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"25px 15px",margin:"40px auto"}}>
                {
                  packageApartData && packageApartData.map((el)=>{
                    return(
                      <Link to={`/packages/${el.endPoint}`} style={{textDecoration:"none",color:"#808080"}}>
                       {
                         el.name=="1 BHK"?
                         <Box sx={{width:"100px",padding:"10px",textAlign:"center", backgroundColor:"#F5FAFF",color:"gray",borderBottom:"4px solid #0080ff",boxShadow:"0.1px 8px 10px #e0e0e0"}}>
                            <Box component="img" src={el.logo} width="25%"/>
                            <Box sx={{fontSize:"12px",color:"#0080ff",letterSpacing:0.4}}>{el.name}</Box>
                            <Box sx={{fontSize:"11px"}}>{el.NOP} Packages</Box>
                          </Box>:
                       <Box sx={{width:"100px",padding:"10px",textAlign:"center",border:"1px solid #e0e0e0"}}>
                       <Box component="img" src={el.logo} width="25%"/>
                       <Box sx={{fontSize:"12px",letterSpacing:0.4}}>{el.name}</Box>
                       <Box sx={{fontSize:"11px"}}>{el.NOP} Packages</Box>
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
              close?(<Box></Box>):(<Box sx={{width:"120px",height:"32px",backgroundColor:"#F2ECEC",color:"gray",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",gap:"5px",marginBottom:"28px",boxSizing:"border-box",padding:"5px"}}>1 BHK<CloseIcon sx={{width:"20px",marginTop:"2px",cursor:"pointer"}} onClick={()=>ResetData()}/></Box>)
            }
          <Box sx={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",height:"145vh",overflow:"scroll"}}>
            {
              data && data.map((el)=>{
                return(
                  <Box sx={{border:"1px solid grey"}}>
                  <Box component="img" src={el.src} width="100%"></Box>
                  <Box sx={{padding:"25px"}}>
                  <Box>{el.title}</Box>
                  <hr/>
                  <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box>
                      <span>{value==100?el.price:el.price2}</span><span>{el.desc}</span>
                    </Box>
                    <Box>
                      <Box component="img" src={el.logo} style={{width:"33px",height:"33px",borderRadius:"50%",border:"1px solid gray",padding:"5px",boxSizing:"border-box"}}/><Box sx={{float:"right"}}>{el.items}</Box>
                    </Box>
                  </Box>
                  </Box>
                  </Box>
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

export default OneBHK;
