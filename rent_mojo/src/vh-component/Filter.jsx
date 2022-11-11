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
export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  //console.log(category);
  const handleChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
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
      <Stack pl={12} mt={10} spacing={3} border="1px #CCCCCC solid" w="20%" mr={-20} h={60} >
        <Text textAlign="left" mt={5}>ROOMS</Text>
        <Checkbox
          value="sofa"
          isChecked={category.includes("sofa")}
          onChange={handleChange}
          color="grey"
        >
          Living Rooms
        </Checkbox>
        <Checkbox
          value="work from home"
          isChecked={category.includes("work from home")}
          onChange={handleChange}
          color="grey"
        >
          Work From Home
        </Checkbox>
        <Checkbox
          value="Bedroom"
          isChecked={category.includes("Bedroom")}
          onChange={handleChange}
          color="grey"
        >
          Bedroom
        </Checkbox>
        <Checkbox
          value="kitchen & Dining"
          isChecked={category.includes("kitchen & Dining")}
          onChange={handleChange}
          color="grey"
        >
          Kitchen & Dining
        </Checkbox>
      </Stack>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

  
//   export default function ForgotPasswordForm(): JSX.Element {
//     return (
//       <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Stack
//           spacing={4}
//           w={'full'}
//           maxW={'md'}
//           bg={useColorModeValue('white', 'gray.700')}
//           rounded={'xl'}
//           boxShadow={'lg'}
//           p={6}
//           my={12}>
//           <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
//             Forgot your password?
//           </Heading>
//           <Text
//             fontSize={{ base: 'sm', sm: 'md' }}
//             color={useColorModeValue('gray.800', 'gray.400')}>
//             You&apos;ll get an email with a reset link
//           </Text>
//           <FormControl id="email">
//             <Input
//               placeholder="your-email@example.com"
//               _placeholder={{ color: 'gray.500' }}
//               type="email"
//             />
//           </FormControl>
//           <Stack spacing={6}>
//             <Button
//               bg={'blue.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'blue.500',
//               }}>
//               Request Reset
//             </Button>
//           </Stack>
//         </Stack>
//       </Flex>
//     );
//   }