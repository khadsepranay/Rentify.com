import { useEffect } from "react";
import {
  Flex,
  Box,
  Image,
  Icon,
  chakra,
  Tooltip,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CircularProgress, SimpleGrid } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postProducts } from "../Redux/product/action";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import { Filter } from "./Filter";
import { useLocation, useSearchParams } from "react-router-dom";
export const Product = () => {
  const [heart, setheart] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.product);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const handleClick = (el) => {
    postProducts(el);
  };

  useEffect(() => {
    let getcategory;
    if (location.search || data.length === 0) {
      getcategory = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getProducts(getcategory));
  }, [location.search]);
  if (loading) {
    return (
      <CircularProgress
        isIndeterminate
        color="green.300"
        mt={40}
        size="100px"
      />
    );
  } else if (error) {
    return <h2>Error...</h2>;
  }
  return (
    <> 
    <Flex flexDirection="row" justifyContent="space-around" >
      <Filter/>
      <SimpleGrid columns={[null, 3]} w="68%" spacing={5} mt={10}>
        {data?.map((el, index) => (
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            key={index}
          >
            <Box
              border="1px grey solid"
              maxW="100%"
              height={370}
              borderWidth="1px"
              shadow="lg"
              position="relative"
            >
              <Box>
                <Image
                  src={el.img}
                  alt={`Picture of ${el.title}`}
                  roundedTop="lg"
                  position="relative"
                />
                <Box
                  top={3}
                  position="absolute"
                  left={3}
                  w="42px"
                  h="42px"
                  bg="white"
                  borderRadius="100%"
                >
                  <Box position="absolute" top={2.5} left={2}>
                    {heart ? (
                      <BsFillHeartFill
                        onClick={() => setheart(!heart)}
                        size={25}
                        color="red"
                        bg="red"
                      />
                    ) : (
                      <BsFillHeartFill
                        onClick={() => setheart(!heart)}
                        size={25}
                        color="grey"
                        background-color="red"
                      />
                    )}
                    {/* <FaRegHeart
                      onClick={() => handleChange(true)}
                      size={25}
                      color="red"
                    /> */}
                  </Box>
                </Box>
              </Box>
              {el.stock == "Out of stock" ? (
                <Box mt={3} fontSize={16} bg="#5D5C5B" color="white" p={3.5}>
                  OUT OF STOCK <Box>{el.available}</Box>
                </Box>
              ) : (
                <Box p="2">
                  <Flex justifyContent="space-between">
                    <Box
                      fontSize="15px"
                      fontWeight="semibold"
                      as="h3"
                      textAlign="left"
                      lineHeight="tight"
                    >
                      {el.title}
                    </Box>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a href={"#"} display={"flex"}>
                        <Button bg="white" onClick={() => handleClick(el)}>
                          <Icon
                            as={FiShoppingCart}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                            color="red"
                          />
                        </Button>
                      </chakra.a>
                    </Tooltip>
                  </Flex>

                  <Flex
                    alignContent="center"
                    justifyContent="space-between"
                    borderTop="1px solid grey"
                  >
                    <Box>
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        ₹
                      </Box>
                      {`${el.price}/mo`}
                    </Box>
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      w={20}
                    >
                      <Box>
                        <Image
                          src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
                          w={7}
                        />
                      </Box>
                      <Box mt={0.5}>5 Day</Box>
                    </Flex>
                  </Flex>
                </Box>
              )}
            </Box>
          </Flex>
        ))}
        ;
      </SimpleGrid>
      </Flex>
    </>
  );
};
