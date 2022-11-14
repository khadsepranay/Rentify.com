// import { Box } from "@mui/system";

// function SingleSearchData() {
//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: {
//           xl: "repeat(2,1fr)",
//           lg: "repeat(2,1fr)",
//           md: "repeat(1,1fr)",
//           sm: "repeat(1,1fr)",
//           xs: "repeat(1,1fr)",
//         },
//         justifyContent: "space-between",
//         gap: {
//           xl: "25px 20px",
//           lg: "20px 5px",
//           md: "25px",
//           sm: "25px",
//           xs: "25px",
//         },
//         marginTop: "20px",
//         marginBottom: "30px",
//         width: "100%",
//       }}
//     >
//       {packageRoomData &&
//         packageRoomData.map((el) => {
//           return (
//             <Box
//               sx={{
//                 width: "100%",
//                 padding: "10px",
//                 textAlign: "center",
//                 border: "1px solid #e0e0e0",
//               }}
//               onClick={() => getData()}
//             >
//               <Box
//                 component="img"
//                 src={el.logo}
//                 width={{
//                   xl: "25%",
//                   lg: "25%",
//                   md: "25%",
//                   sm: "25%",
//                   xs: "10%",
//                 }}
//                 margin="auto"
//               />
//               <Box
//                 sx={{
//                   fontSize: {
//                     xl: "14px",
//                     lg: "14px",
//                     md: "17px",
//                     sm: "16px",
//                     xs: "14px",
//                   },
//                   letterSpacing: 0.4,
//                 }}
//               >
//                 {el.name}
//               </Box>
//               <Box
//                 sx={{
//                   fontSize: {
//                     xl: "12px",
//                     lg: "12px",
//                     md: "15px",
//                     sm: "14px",
//                     xs: "12px",
//                   },
//                 }}
//               >
//                 {el.NOP} Packages
//               </Box>
//             </Box>
//           );
//         })}
//     </Box>
//   );
// }

// export default SingleSearchData
