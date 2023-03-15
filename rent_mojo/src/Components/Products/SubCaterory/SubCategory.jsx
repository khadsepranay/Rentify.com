import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Product_Navbar from "../Navbar/Product_Navbar";
import HomeNavbar from "../../Home/HomeNavbar";
import Loader from "../Loader/Loader";
import Inside_Loader from "../Loader/Inside_Loader";
import { ChakraProvider } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function SubCategory() {
  let [roomData, setRoomData] = useState([]);
  let [data, setData] = useState([]);
  let [close, setClose] = useState(true);
  let [value, setValue] = useState(100);
  let [reset, setReset] = useState(true);
  let [insideLoading, setInsideLoading] = useState(false);
  let [loading, setLoading] = useState(false);

  const location = useLocation();
  let path = location.pathname;
  let [nothing, category, sub_category] = path.split("/");

  useEffect(() => {
    setLoading(true);
    scrollToTop();
  }, []);

  useEffect(() => {
    setInsideLoading(true);
    axios
      .get(`https://tender-lime-pike.cyclic.app/category/${category}`)
      .then((res) => {
        setRoomData(res.data);
        setLoading(false);
        setInsideLoading(false);
        scrollToTop();
      })
      .catch((err) => {
        console.log(err);
      });
    getData(category, sub_category);
  }, [sub_category]);

  function getData(category, sub_category) {
    if (category && sub_category) {
      setClose(true);
      setReset(true);
    } else {
      setClose(false);
      setReset(false);
    }
    setInsideLoading(true);
    axios
      .get(
        `https://tender-lime-pike.cyclic.app/product/${category}/${sub_category}`
      )
      .then((res) => {
        setData(res.data);
        setInsideLoading(false);
        setLoading(false);
        scrollToTop();
      });
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleChange(e) {
    setValue(e.target.value);
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
      sx={{ width: "100vw", height: "100%", marginTop: "90px", padding: "0px" }}
    >
      <ChakraProvider>
        <HomeNavbar />
      </ChakraProvider>
      <Product_Navbar />
      <Box
        sx={{
          width: { xl: "80vw", lg: "80vw", md: "90vw", sm: "90vw" },
          margin: "40px auto 0px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xl: "1fr 3fr",
              lg: "1fr 3fr",
              md: "1fr 3fr",
              sm: "2fr 5fr",
            },
            gap: { xl: "40px", lg: "5px", md: "0px", sm: "0px" },
          }}
        >
          <Box
            sx={{
              width: { xl: "100%", lg: "90%", md: "90%", sm: "90%", xs: "90%" },
              margin: "auto",
              marginTop: "0px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Box
                  component="img"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNi4zNDggMTIuMDAybDMuMzU0IDMuMDM2di04Ljc2YS4yOS4yOSAwIDAgMSAuMDgtLjE5OUwxNS4wMTYuNTc4SC45NjlsNS4yOTggNS41YS4yODcuMjg3IDAgMCAxIC4wOC4ydjUuNzI0em0zLjY0NCAzLjk3N2EuMjg0LjI4NCAwIDAgMS0uMTk0LS4wNzZsLTMuOTMzLTMuNTU5YS4yOS4yOSAwIDAgMS0uMDk1LS4yMTRWNi4zOTVMLjA4LjQ4OUEuMjkuMjkgMCAwIDEgLjI5IDBoMTUuNGMuMTE3IDAgLjIyLjA2OS4yNjYuMTc1YS4yODcuMjg3IDAgMCAxLS4wNTYuMzEzbC01LjYyIDUuOTA2djkuMjk2YS4yOS4yOSAwIDAgMS0uMjkuMjg5eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0RGREZERiIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjMzEzMTMxIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNLTEtMWgxOHYxOEgtMXoiLz48L2c+PC9nPjwvc3ZnPg=="
                />
                <span style={{ color: "gray" }}>Filters</span>
              </Box>
              <Button
                sx={{
                  color: "white",
                  padding: "5px 25px",
                  fontWeight: "500",
                  backgroundColor: "#dd0000",
                  ":hover": { backgroundColor: "green" },
                }}
                onClick={() => getData()}
              >
                Reset
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                boxShadow: "1px 2px 10px #e0e0e0",
                marginTop: "30px",
                padding: "15px",
                margin: "25px auto",
              }}
            >
              <Box
                sx={{
                  color: "#808080",
                  fontSize: { xl: "14px", lg: "14px", md: "13px", sm: "12px" },
                  fontWeight: "500",
                }}
              >
                CHOOSE RENTAL TENURE
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={100}
                  value={value}
                  onChange={(e) => handleChange(e)}
                  step={50}
                  sx={{
                    width: { xl: "95%", lg: "95%", md: "95%", sm: "95%" },
                    color: "#00BCBC",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box sx={{ color: "#330019" }}>3+</Box>
                  <Box sx={{ color: "#330019" }}>6+</Box>
                  <Box sx={{ color: "#330019" }}>12+</Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                margin: "40px auto 10px",
                color: "#808080",
                fontWeight: "500",
              }}
            >
              Choose by Room Type
            </Box>
            <hr />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xl: "repeat(2,1fr)",
                  lg: "repeat(2,1fr)",
                  md: "repeat(1,1fr)",
                  sm: "repeat(1,1fr)",
                  xs: "repeat(1,1fr)",
                },
                justifyContent: "space-between",
                gap: {
                  xl: "25px 20px",
                  lg: "20px 5px",
                  md: "25px",
                  sm: "25px",
                  xs: "25px",
                },
                marginTop: "20px",
                marginBottom: "30px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {roomData &&
                roomData.map((el) => {
                  return (
                    <Link
                      key={el._id}
                      to={`/${el.category}/${el.sub_category}`}
                      style={{ textDecoration: "none", color: "#808080" }}
                    >
                      {reset && el.sub_category == sub_category ? (
                        <Box
                          sx={{
                            width: "100%",
                            padding: "10px",
                            textAlign: "center",
                            backgroundColor: "white",
                            color: "gray",
                            borderBottom: "4px solid #00BCBC",
                            boxShadow: "0.1px 8px 10px #e0e0e0",
                          }}
                        >
                          <Box
                            component="img"
                            src={el.image}
                            width={{
                              xl: "100%",
                              lg: "100%",
                              md: "100%",
                              sm: "100%",
                              xs: "50%",
                            }}
                            margin="auto"
                          />
                          <Box
                            sx={{
                              fontSize: {
                                xl: "14px",
                                lg: "14px",
                                md: "17px",
                                sm: "16px",
                                xs: "14px",
                              },
                              color: "#00BCBC",
                              letterSpacing: 0.4,
                              paddingTop: "5px",
                            }}
                          >
                            {el.name}
                          </Box>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            padding: "10px",
                            textAlign: "center",
                            border: "1px solid #e0e0e0",
                          }}
                        >
                          <Box
                            component="img"
                            src={el.image}
                            width={{
                              xl: "100%",
                              lg: "100%",
                              md: "100%",
                              sm: "100%",
                              xs: "50%",
                            }}
                            margin="auto"
                          />
                          <Box
                            sx={{
                              fontSize: {
                                xl: "14px",
                                lg: "14px",
                                md: "17px",
                                sm: "16px",
                                xs: "14px",
                              },
                              letterSpacing: 0.4,
                              paddingTop: "5px",
                            }}
                          >
                            {el.name}
                          </Box>
                        </Box>
                      )}
                    </Link>
                  );
                })}
            </Box>
          </Box>

          <Box>
            {!close ? (
              <Box></Box>
            ) : (
              <Box
                sx={{
                  width: "120px",
                  height: "32px",
                  backgroundColor: "#F2ECEC",
                  color: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  gap: "5px",
                  marginBottom: "28px",
                  marginLeft: {
                    xl: "22px",
                    lg: "35px",
                    md: "35px",
                    sm: "25px",
                    xs: "25px",
                  },
                }}
              >
                {sub_category}
                <CloseIcon
                  sx={{ width: "20px", marginTop: "2px", cursor: "pointer" }}
                  onClick={() => getData()}
                />
              </Box>
            )}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xl: "repeat(2,1fr)",
                  lg: "repeat(1,1fr)",
                },
                gap: "35px 5px",
                height: "130vh",
                overflow: "scroll",
                "&::-webkit-scrollbar": { width: "1px" },
              }}
            >
              {insideLoading ? (
                <ChakraProvider>
                  <Inside_Loader />
                </ChakraProvider>
              ) : (
                data &&
                data.map((el) => {
                  return (
                    <Link
                      key={el._id}
                      to={`/${el.category}/${el.sub_category}/${el._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #e6e6e6",
                          color: "#313131",
                          margin: "auto",
                          ":hover": { boxShadow: "2px 5px 8px #e0e0e0" },
                          transition: "0.3s",
                          width: "90%",
                        }}
                      >
                        <Box
                          component="img"
                          src={el.image}
                          width="100%"
                          height="100%"
                        ></Box>
                        <Box
                          sx={{
                            padding: {
                              xl: "25px",
                              lg: "25px 20px",
                              md: "25px 15px",
                              sm: "25px 10px",
                              xs: "30px 10px",
                            },
                            margin: {
                              xl: "0px",
                              lg: "auto 130px",
                              md: "auto 20px",
                              sm: "auto 0px",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              fontWeight: "400",
                              fontSize: {
                                xl: "18px",
                                lg: "20px",
                                md: "18px",
                                sm: "15px",
                              },
                              color: "#606060",
                              marginTop: "-13px",
                              textAlign: {
                                xl: "center",
                                lg: "center",
                                md: "center",
                                sm: "center",
                              },
                            }}
                          >
                            {el.title}
                          </Box>
                          <Box
                            style={{
                              border: "0.1px solid #e0e0e0",
                              margin: "15px auto 25px",
                            }}
                          ></Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: {
                                xl: "space-between",
                                lg: "space-around",
                                md: "space-around",
                                sm: "space-around",
                                xs: "space-around",
                              },
                              margin: "-8px auto -15px",
                            }}
                          >
                            <Box>
                              <span>
                                ₹{" "}
                                {value == 100
                                  ? el.price1
                                  : value == 50
                                  ? el.price2
                                  : el.price3}{" "}
                              </span>
                              <span> / month</span>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                              <Box
                                component="img"
                                src="https://www.rentomojo.com/public/images/package/icons/appliance.svg"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  border: "1px solid gray",
                                  padding: "5px",
                                  boxSizing: "border-box",
                                  marginRight: "10px",
                                }}
                              />
                              <Box sx={{ float: "right", marginTop: "2px" }}>
                                {el.quantity} Items
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  );
                })
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubCategory;
