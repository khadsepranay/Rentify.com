import { Appliances } from "./Appliances";
import { Box, ChakraProvider, Checkbox, CloseButton, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { Button, Flex, Input } from "@chakra-ui/react";
import HomeNavbar from "../Home/HomeNavbar";
import Nav from "./Nav";
export const AppFilter = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  //console.log(category);
  const handleChange = (e) => {
    const option = e.target.value;
    //console.log(option)
    //let newCategoryOptions = [...category]=> this seprade operator use for give all the filter category data.
    let newCategoryOptions = [...category]; // this line gives only one filter data at a time.
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);

  const handlereset = () => {
    setCategory([]);
  };

  return (
    <Box>
      <ChakraProvider><HomeNavbar/></ChakraProvider>
      <Nav />
      <Box width={{base:"98%",sm:"98%",md:"95%",lg:"95%",xl:"90%"}} margin={"auto"} mt="30px">
        <Box display={"flex"} justifyContent={"space-evenly"} gap={"10px"} alignItems={"flex-start"}>
          {windowSize.innerWidth < 700 ? null : (
            <Box width={{md:"25%",lg:"20%",xl:"20%"}}>
              <Box
                display={"flex"}
                flexDirection={{
                  base: "row",
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                }}
                justifyContent={"space-between"}
                gap={"20px"}
              >
                <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                  <CiFilter size={30} />
                  <Text>Filter</Text>
                </Box>
                <Box>
                  <Button
                    disabled={category.length == 0}
                    onClick={handlereset}
                    bg="#FFFFFF"
                    border="1px black solid"
                  >
                    Reset
                  </Button>
                </Box>
              </Box>
              {/* new file aaded here */}
              <br />
              <Flex flexDirection="column" w="100%" mt={20} gap={"10"}>
                <Stack
                  border="1px #CCCCCC solid"
                  spacing={3}
                  p={"10px"}
                  h={"auto"}
                >
                  <Text textAlign="left" mt={5}>
                    PRODUCT TYPE
                  </Text>
                  <Checkbox
                    value="Refrigerators & Freezers"
                    isChecked={category.includes("Refrigerators & Freezers")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Refrigerators & Freezers
                  </Checkbox>
                  <Checkbox
                    value="Televisions"
                    isChecked={category.includes("Televisions")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Televisions
                  </Checkbox>
                  <Checkbox
                    value="Washing Machines"
                    isChecked={category.includes("Washing Machines")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Washing Machines
                  </Checkbox>
                  <Checkbox
                    value="Air Conditioners"
                    isChecked={category.includes("Air Conditioners")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Air Conditioners
                  </Checkbox>
                  <Checkbox
                    value="Water & Air Purifiers"
                    isChecked={category.includes("Water & Air Purifiers")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Water & Air Purifiers
                  </Checkbox>
                  <Checkbox
                    value="Microwaves & induction"
                    isChecked={category.includes("Microwaves & induction")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Microwaves & induction
                  </Checkbox>
                  <Checkbox
                    value="Air Coolers"
                    isChecked={category.includes("Air Coolers")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Air Coolers
                  </Checkbox>
                  <Checkbox
                    value="Dishwashers"
                    isChecked={category.includes("Dishwashers")}
                    onChange={handleChange}
                    color="grey"
                  >
                    Dishwashers
                  </Checkbox>
                </Stack>
                <Stack bg="#F3FBFC" height={"auto"}>
                  <Box
                    border="1px skyblue solid"
                    w="100%"
                    h={"auto"}
                    p={5}
                    textAlign="left"
                  >
                    <Text>What do you want us to launch next?</Text>
                    <Text mt={3} colur="grey">
                      Suggest us a product
                    </Text>
                    <Input placeholder="Your Suggestions" mt={3} />
                    <Button
                      mt={3}
                      color="#1DCBDC"
                      bg="#F3FBFC"
                      onClick={() => alert("Thank You For Your Suggestion")}
                    >
                      Submit
                    </Button>
                  </Box>
                </Stack>
              </Flex>
            </Box>
          )}
          <Box width={{base:"98%",sm:"98%",md:"98%",lg:"78%",xl:"78%"}}>
            <Box width={"100%"} margin={"auto"}>
              <Box flexDirection="row" textAlign={"left"}>
                {category?.map((el, index) => (
                  <Button borderRadius={"none"}>
                    <Text key={index}>{el}</Text>
                    {/* <CloseButton size="sm" /> */}
                  </Button>
                ))}
              </Box>
            </Box>
            <br />
            <Box>
              <Appliances />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
