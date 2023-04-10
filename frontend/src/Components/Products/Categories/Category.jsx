import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeNavbar from "../../Home/HomeNavbar";
import Product_Navbar from "../Navbar/Product_Navbar";
import Loader from "../Loader/Loader";
import { ChakraProvider } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function Packages() {
  let [roomData, setRoomData] = useState([]);
  let [reload, setReload] = useState(false);
  let [loading, setLoading] = useState(false);

  let location = useLocation();

  let path = location.pathname;

  let [nothing, category] = path.split("/");

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tender-lime-pike.cyclic.app/category/${category}`)
      .then((res) => {
        setRoomData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  if (loading) {
    return (
      <ChakraProvider>
        <Loader />
      </ChakraProvider>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        boxSizing: "border-box",
        marginTop: "90px",
        marginBottom: "80px",
        padding: "0px",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <ChakraProvider>
        <HomeNavbar />
      </ChakraProvider>
      <Product_Navbar reload={reload} setReload={setReload} />
      <Box
        sx={{
          width: { xl: "75vw", lg: "85vw", md: "85vw", sm: "90vw", xs: "90vw" },
          margin: "40px auto 0px",
        }}
      >
        <Box>
          <Box>
            <Box
              sx={{
                textAlign: "left",
                fontSize: "22px",
                fontWeight: "400",
                color: "#313131",
              }}
            >
              Choose by Room Type
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "2px",
                backgroundColor: "red",
                marginTop: "10px",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xl: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                md: "repeat(3,1fr)",
                sm: "repeat(2,1fr)",
                xs: "repeat(1,1fr)",
              },
              gap: {
                xl: "0px 30px",
                lg: "0px 30px",
                md: "0px 30px",
                sm: "0px 40px",
                xs: "0px 50px",
              },
              marginTop: "40px",
            }}
          >
            {roomData &&
              roomData.map((el) => {
                return (
                  <NavLink
                    key={el._id}
                    to={`/${el.category}/${el.sub_category}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        ":hover": {
                          transform: "translateY(-8px)",
                          cursor: "pointer",
                          transition: "0.5s",
                          transitionTimingFunction: "ease",
                        },
                      }}
                    >
                      <Box component="img" src={el.image} width="100%" />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          backgroundColor: "white",
                          width: "67%",
                          margin: "auto",
                          padding: "10px",
                          position: "relative",
                          top: "-22px",
                          border: "1px solid #e6e6e6",
                          borderRadius: "2px",
                        }}
                      >
                        <Box>
                          <Box
                            sx={{
                              color: "#313131",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {el.name}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </NavLink>
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Packages;
