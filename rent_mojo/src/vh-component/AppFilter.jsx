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
export const AppFilter = () => {
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
   
  const handlereset =() => {
    setCategory([])
  }
  return (
    <>
    <Button onClick={handlereset}>reset</Button>
    <Box position="absolute" >
        <Box flexDirection="row">
     {category?.map((el,index) => <Text key={index}>{el}</Text>)}</Box></Box>
    <Flex flexDirection="column" w="20%" mr={-20}  mt={20} gap={10} position="relative">
      <Stack border="1px #CCCCCC solid" spacing={3} pl={10} h={350} >
        <Text textAlign="left" mt={5}>PRODUCT TYPE</Text>
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

  
