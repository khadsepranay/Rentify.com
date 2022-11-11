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
export const FitFilter = () => {
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
    <Flex  flexDirection="column" w="20%" mr={-20}  mt={10} gap={10}>
      <Stack border="1px #CCCCCC solid" spacing={3} pl={10} h={220} >
        <Text textAlign="left" mt={5}>PRODUCT TYPE</Text>
        <Checkbox
          value="Treadmills"
          isChecked={category.includes("Treadmills")}
          onChange={handleChange}
          color="grey"
        >
        Treadmills
        </Checkbox>
        <Checkbox
          value="Cross Trainers"
          isChecked={category.includes("Cross Trainers")}
          onChange={handleChange}
          color="grey"
        >
        Cross Trainers
        </Checkbox>
        <Checkbox
          value="Exercise Bikes"
          isChecked={category.includes("Exercise Bikes")}
          onChange={handleChange}
          color="grey"
        >
         Exercise Bikes
        </Checkbox>
        <Checkbox
          value="Massagers"
          isChecked={category.includes("Massagers")}
          onChange={handleChange}
          color="grey"
        >
        Massagers
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

  
