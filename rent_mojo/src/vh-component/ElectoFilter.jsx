import { Box, Checkbox, Stack, Text} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    useColorModeValue,
  } from '@chakra-ui/react';
export const ElectoFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  //console.log(category);
  const handleChange = (e) => {
    const option = e.target.value;
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

  return (
    <>
    <Flex flexDirection="column" w="20%" mr={-20}  mt={10} gap={10}> 
      <Stack border="1px #CCCCCC solid" spacing={3} pl={10} h={250}>
        <Text textAlign="left" mt={5}>PRODUCT TYPE</Text>
        <Checkbox
          value="Smartphones"
          isChecked={category.includes("Smartphones")}
          onChange={handleChange}
          color="grey"
        >
       Smartphones
        </Checkbox>
        <Checkbox
          value="Laptops"
          isChecked={category.includes("Laptops")}
          onChange={handleChange}
          color="grey"
        >
       Laptops
        </Checkbox>
        <Checkbox
          value="Gaming Consoles"
          isChecked={category.includes("Gaming Consoles")}
          onChange={handleChange}
          color="grey"
        >
         Gaming Consoles
        </Checkbox>
        <Checkbox
          value="Smart Devices"
          isChecked={category.includes("Smart Devices")}
          onChange={handleChange}
          color="grey"
        >
        Smart Devices
        </Checkbox>
        <Checkbox
          value="Tablets"
          isChecked={category.includes("Tablets")}
          onChange={handleChange}
          color="grey"
        >
       Tablets
        </Checkbox>
       </Stack>
       <Stack bg="#F3FBFC">
          <Box border="1px skyblue solid" w="100%" h={60} p={5} textAlign="left" >
            <Text>What do you want us to launch next?</Text>
            <Text mt={3} colur="grey">Suggest us a product</Text>
            <Input placeholder="Your Suggestions" mt={3}/>
            <Button mt={3} color="#1DCBDC" bg="#F3FBFC" onClick={()=>alert("Thank You For Your Suggestion")}>Submit</Button>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

  
