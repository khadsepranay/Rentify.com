import {
  Box,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Image,
  Show,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HomeNavbar from "./HomeNavbar";
import AutoSlider from "./AutoSlider";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import { MoreRenting } from "./MoreRenting";
import ReviewCarousel from "./ReviewCarousel";
import Footer from "./Footer";
import { useToast } from "@chakra-ui/react";

const iconsDiv = [
  {
    id: "1",
    icon: "./extraImages/packages.jpg",
    iconName: "Packages",
    href: "/packages",
  },
  {
    id: "2",
    icon: "./extraImages/furniture.jpg",
    iconName: "Furniture",
    href: "/furniture",
  },
  {
    id: "3",
    icon: "./extraImages/appliances.jpg",
    iconName: "Appliances",
    href: "/appliances",
  },
  {
    id: "4",
    icon: "./extraImages/electronics.jpg",
    iconName: "Electronics",
    href: "/electronics",
  },
  {
    id: "5",
    icon: "./extraImages/fitness.jpg",
    iconName: "Fitness",
    href: "/fitness",
  },
  {
    id: "6",
    icon: "./extraImages/wfh.jpg",
    iconName: "WFH Essentials",
    href: "#",
  },
];

export const HomePage = () => {
  let token = JSON.parse(localStorage.getItem("rentifyToken"));
  let toast = useToast();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        toast({
          title: "Please Login to view Products",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }, 500);
    }
    scrollToTop();
  }, []);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Box>
      <HomeNavbar />
      <Box style={{ marginTop: "90px" }}>
        <AutoSlider />
        {/* // Passing `columns={[2, null, 3]}` and `columns={{ sm: 2, md: 3 }}`
            // will have the same effect. */}
        <Box
          width={{ base: "95%", sm: "95%", md: "95%", lg: "75%" }}
          zIndex={"100"}
          position={"relative"}
          margin={{
            base: "-250px auto 0px",
            sm: "-150px auto 0px",
            md: "-60px auto 30px",
            lg: "-50px auto",
            xl: "50px auto 50px",
          }}
        >
          <SimpleGrid columns={[3, 4, 4, 5, 6]} spacing="25px">
            {iconsDiv.map((el) => (
              <Link key={el.id} to={el.href}>
                <Box
                  key={el.id}
                  cursor={"pointer"}
                  height="120px"
                  boxShadow={"5px 5px 20px #e2eaf0"}
                  borderRadius={"10px"}
                  _hover={{
                    background: "#fff",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                >
                  <Flex
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"30px"}
                  >
                    <Image src={el.icon} alt="icon-image-1" width={"30px"} />
                    <Text>{el.iconName}</Text>
                  </Flex>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
        <HomeCarousel />
        <MoreRenting />
        <Box
          display={"flex"}
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
          gap={{ base: "30px", sm: "30px", md: "50px", lg: "180px" }}
          textAlign={"left"}
          padding={{
            base: "120px 10px 50px 10px",
            sm: "120px 10px 50px 10px",
            md: "120px 10px 50px 10px",
            lg: "120px 0px 50px 50px",
          }}
        >
          <Box
            width={{ base: "90%", md: "20%", sm: "95%", lg: "15%" }}
            marginLeft={{ sm: "5%", md: "5%", lg: "10%", base: "5%" }}
          >
            <Text
              fontSize={"22px"}
              fontWeight={"600"}
              fontFamily={"Muli, sans-serif"}
            >
              Over 1.5 lac
            </Text>
            <Text fontSize={"22px"} fontFamily={"Muli, sans-serif"}>
              happy subscribers
            </Text>
            <Box
              backgroundColor={"#dc3236"}
              borderRadius={"5px"}
              width={"3em"}
              height={"2.5px"}
              bottom={"-12px"}
            ></Box>
            <br />
            <Text fontSize={"18px"} color={"#717171"}>
              Here's what they have to say about their RentoMojo experience.
            </Text>
          </Box>
          <ReviewCarousel />
        </Box>
      </Box>
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    </Box>
  );
};
