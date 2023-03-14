import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import {} from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  slide: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AutoSlider() {
  const [slider, setSlider] = React.useState(0);
  const top = useBreakpointValue({
    base: "18%",
    md: "30%",
    sm: "18%",
    lg: "35%",
    xl: "50%",
  });
  const side = useBreakpointValue({
    base: "2%",
    md: "10px",
    sm: "2%",
    lg: "1%",
    xl: "1%",
  });
  const cards = [
    "https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg",
    "https://s.rmjo.in/WP-Web.png",
    "https://s.rmjo.in/AC-Offer-Banner-Web-.jpg",
    "https://s.rmjo.in/Paytm-Offer-banner-for-web.jpg",
    "https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg",
  ];

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

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      pb={"10px"}
      height={{ base: "0%", sm: "0%", md: "0%", lg: "20%" }}
      width={{ base: "95%", sm: "95%", md: "95%", lg: "75%" }}
      margin={"auto"}
      borderRadius={"30px"}
      backgroundColor={{
        base: "transparent",
        sm: "transparent",
        md: "transparent",
        lg: "transparent",
        xl: "#d4e0e9",
      }}
      zIndex={0}
      fontSize={{ base: "13px", md: "10px", sm: "10px", lg: "13px" }}
    >
      <Box
        position={"relative"}
        height={"425px"}
        width={"full"}
        margin={"auto"}
        overflow={"hidden"}
        borderRadius={"30px"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="gray"
          borderTopRightRadius={"10px"}
          borderBottomRightRadius={"10px"}
          position="absolute"
          left={side}
          height={"50px"}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <FaChevronLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="gray"
          borderTopLeftRadius={"10px"}
          borderBottomLeftRadius={"10px"}
          position="absolute"
          right={side}
          top={top}
          height={"50px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <FaChevronRight />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"450px"}
              position="relative"
              zIndex={100}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            >
              <Image src={url} borderRadius={"30px"} />
            </Box>
          ))}
        </Slider>
      </Box>
      {windowSize.innerWidth < 1280 ? null : (
        <Flex
          gap={{ base: "2px", md: "2px", sm: "2px", lg: "5px" }}
          justifyContent={"center"}
          alignItems={"center"}
          mt={{ sm: "-250px", lg: "10px" }}
        >
          <Image
            src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
            width={"20px"}
          />
          <Text>
            Safety precautions during COVID-19. We’re taking additional steps
            and precautionary measures to protect our community from COVID-19.
          </Text>
          <a href="https://www.rentomojo.com/covid19-response" target="_blank">
            <Text display={"flex"}>
              Know more
              <IoChevronForwardOutline style={{ marginTop: "5px" }} />
            </Text>
          </a>
        </Flex>
      )}
    </Box>
  );
}
