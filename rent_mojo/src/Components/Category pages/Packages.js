// import { Box } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import HomeNavbar from "../Home/HomeNavbar";
// import {ChakraProvider} from "@chakra-ui/react"

// function Packages() {
//   let [roomData, setRoomData] = useState([]);
//   let [apartData, setApartData] = useState([]);
//   function getPackagesData() {
//     axios.get("http://localhost:8000/packagesRoom").then((res) => {
//       let data = res.data;
//       setRoomData(data);
//     });

//     axios.get("http://localhost:8000/packagesApart").then((res) => {
//       let data = res.data;
//       setApartData(data);
//     });
//   }

//   useEffect(() => {
//     getPackagesData();
//   }, []);
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100%",
//         boxSizing: "border-box",
//         marginTop: "90px",
//         marginBottom:"80px",
//         padding: "0px",
//         fontFamily:"'Open Sans', sans-serif"
//       }}
//     >
//       <ChakraProvider><HomeNavbar/></ChakraProvider>
//       <Box sx={{ width: {xl:"75vw",lg:"85vw",md:"85vw",sm:"90vw",xs:"90vw"}, margin: "40px auto 0px" }}>
//         <Box>
//           <Box>
//             <Box
//               sx={{
//                 textAlign: "left",
//                 fontSize: "22px",
//                 fontWeight: "400",
//                 color: "#313131",
//               }}
//             >
//               Choose by Room Type
//             </Box>
//             <Box
//               sx={{
//                 width: "40px",
//                 height: "2px",
//                 backgroundColor: "red",
//                 marginTop: "10px",
//               }}
//             ></Box>
//           </Box>
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {xl:"repeat(3,1fr)",lg:"repeat(3,1fr)",md:"repeat(3,1fr)",sm:"repeat(2,1fr)",xs:"repeat(1,1fr)"},
//               gap: {xl:"0px 30px",lg:"0px 30px",md:"0px 30px",sm:"0px 40px",xs:"0px 50px"},
//               marginTop: "40px",
//             }}
//           >
//             {roomData &&
//               roomData.map((el) => {
//                 return (
//                   <NavLink to={`/packages/${el.endPoint}`} style={{textDecoration:"none"}} >
//                   <Box
//                     sx={{
//                       ":hover": {
//                         transform: "translateY(-8px)",
//                         cursor: "pointer",
//                         transition:"0.5s",
//                         transitionTimingFunction:"ease",
//                       },
//                     }}
//                   >
//                     <Box component="img" src={el.image} width="100%" />
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                         backgroundColor: "white",
//                         width: "67%",
//                         margin: "auto",
//                         padding: "10px",
//                         position: "relative",
//                         top: "-40px",
//                         border: "1px solid #e6e6e6",
//                         borderRadius: "2px",
//                       }}
//                     >
//                       <Box component="img" src={el.logo} height="40px" />
//                       <Box>
//                         <Box
//                           sx={{
//                             color: "#313131",
//                             fontSize: "14px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           {el.name}
//                         </Box>
//                         <Box sx={{ color: "#717171", fontSize: "12px" }}>
//                           {el.NOP} Packages
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Box>
//                   </NavLink>
//                 );
//               })}
//           </Box>
//         </Box>
//         <Box sx={{ marginTop: "40px" }}>
//           <Box>
//             <Box
//               sx={{
//                 textAlign: "left",
//                 fontSize: "22px",
//                 fontWeight: "400",
//                 color: "#313131",
//               }}
//             >
//               Choose by Apartment Type
//             </Box>
//             <Box
//               sx={{
//                 width: "40px",
//                 height: "2px",
//                 backgroundColor: "red",
//                 marginTop: "10px",
//               }}
//             ></Box>
//           </Box>
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {xl:"repeat(3,1fr)",lg:"repeat(3,1fr)",md:"repeat(3,1fr)",sm:"repeat(2,1fr)",xs:"repeat(1,1fr)"},
//               gap: {xl:"0px 30px",lg:"0px 30px",md:"0px 30px",sm:"0px 40px",xs:"0px 50px"},
//               margin: "40px 0px",
//             }}
//           >
//             {apartData &&
//               apartData.map((el) => {
//                 return (
//                   <NavLink to={`/packages/${el.endPoint}`} style={{textDecoration:"none"}}>
//                   <Box
//                     sx={{
//                       ":hover":{
//                         transform: "translateY(-7px)",
//                         transition: "0.5s",
//                         cursor: "pointer",
//                       }
//                     }}
//                   >
//                     <Box component="img" src={el.image} width="100%" />
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                         backgroundColor: "white",
//                         width: "67%",
//                         margin: "auto",
//                         padding: "10px",
//                         position: "relative",
//                         top: "-40px",
//                         border: "1px solid #e6e6e6",
//                         borderRadius: "2px",
//                       }}
//                     >
//                       <Box component="img" src={el.logo} />
//                       <Box>
//                         <Box sx={{ color: "#313131" }}>{el.name}</Box>
//                         <Box sx={{ color: "#717171" }}>{el.NOP} Packages</Box>
//                       </Box>
//                     </Box>
//                   </Box>
//                   </NavLink>
//                 );
//               })}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Packages;
