import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function Packages() {
  let [roomData, setRoomData] = useState([]);
  let [apartData, setApartData] = useState([]);
  function getPackagesData() {
    axios.get("http://localhost:8000/packagesRoom").then((res) => {
      let data = res.data;
      setRoomData(data);
    });

    axios.get("http://localhost:8000/packagesApart").then((res) => {
      let data = res.data;
      setApartData(data);
    });
  }

  useEffect(() => {
    getPackagesData();
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Box sx={{ width: "75vw", margin: "144px auto 0px" }}>
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
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "0px 30px",
              marginTop: "40px",
            }}
          >
            {roomData &&
              roomData.map((el) => {
                return (
                  <Box
                    sx={{
                      _hover: {
                        transform: "translateY(-7px)",
                        cursor: "pointer",
                        transition:"0.5s",
                      },
                    }}
                  >
                    <Image src={el.image} width="100%" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        backgroundColor: "white",
                        width: "67%",
                        margin: "auto",
                        padding: "10px",
                        position: "relative",
                        top: "-40px",
                        border: "1px solid #e6e6e6",
                        borderRadius: "2px",
                      }}
                    >
                      <Image src={el.logo} height="40px" />
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
                        <Box sx={{ color: "#717171", fontSize: "12px" }}>
                          {el.NOP} Packages
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Box>
            <Box
              sx={{
                textAlign: "left",
                fontSize: "22px",
                fontWeight: "400",
                color: "#313131",
              }}
            >
              Choose by Apartment Type
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
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "0px 30px",
              marginTop: "40px",
            }}
          >
            {apartData &&
              apartData.map((el) => {
                return (
                  <Box
                    sx={{
                      _hover: {
                        transform: "translateY(-7px)",
                        transition: "0.5s",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Image src={el.image} width="100%" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        backgroundColor: "white",
                        width: "67%",
                        margin: "auto",
                        padding: "10px",
                        position: "relative",
                        top: "-40px",
                        border: "1px solid #e6e6e6",
                        borderRadius: "2px",
                      }}
                    >
                      <Image src={el.logo} />
                      <Box>
                        <Box sx={{ color: "#313131" }}>{el.name}</Box>
                        <Box sx={{ color: "#717171" }}>{el.NOP} Packages</Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Packages;
