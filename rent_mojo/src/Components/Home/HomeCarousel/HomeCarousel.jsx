import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./homecarousel.css";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-feetiesh-shoe-rack-live",
    img: "https://p.rmjo.in/productSquare/2mj3khj8-500x500.jpg",
    title: "Flip Shoe Rack",
    price: "209/mo",
  },
  {
    id: 2,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-dagwood-trundle-queen-bed-with-storage",
    img: "https://p.rmjo.in/productSquare/ni20krjz-500x500.jpg",
    title: "Hiber Wooden Queen Storage Bed (6x5)",
    price: "929/mo",
  },
  {
    id: 3,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-dreamcatcher-queen-bed",
    img: "https://p.rmjo.in/productSquare/16ctgjip-500x500.jpg",
    title: "Kipper Wooden Queen Bed (6x5)",
    price: "809/mo",
  },
  {
    id: 4,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-morris-office-chair",
    img: "https://p.rmjo.in/productSquare/g4ow6lcd-500x500.jpg",
    title: "Morris Office Chair",
    price: "199/mo",
  },
  {
    id: 5,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-solo-microwave-oven",
    img: "https://p.rmjo.in/productSquare/zufkl87m-500x500.jpg",
    title: "Microwave Solo 20L",
    price: "299/mo",
  },
  {
    id: 6,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-stuart-study-table",
    img: "https://p.rmjo.in/productSquare/hdnqmf56-500x500.jpg",
    title: "Stuart Study Table",
    price: "149/mo",
  },
  {
    id: 7,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-barney-recliner",
    img: "https://p.rmjo.in/productSquare/qcr7se17-500x500.jpg",
    title: "Barney Leather Recliner (Brown)",
    price: "799/mo",
  },
  {
    id: 8,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-magnum-wardrobe-1-door",
    img: "https://p.rmjo.in/productSquare/pagu0ofz-500x500.jpg",
    title: "Magnum 1-Door Wardrobe",
    price: "259/mo",
  },
  {
    id: 9,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-magnum-wardrobe-2-door",
    img: "https://p.rmjo.in/productSquare/oe2r0nie-500x500.jpg",
    title: "Magnum 2-Door Wardrobe",
    price: "449/mo",
  },
  {
    id: 10,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-magnum-wardrobe-3-door",
    img: "https://p.rmjo.in/productSquare/zlij623b-500x500.jpg",
    title: "Magnum 3-Door Wardrobe",
    price: "719/mo",
  },
  {
    id: 11,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-poise-queen-bed",
    img: "https://p.rmjo.in/productSquare/70rj36m0-500x500.jpg",
    title: "Poise Wooden Queen Bed (6x5)",
    price: "549/mo",
  },
  {
    id: 12,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-poise-king-bed",
    img: "https://p.rmjo.in/productSquare/mhbh0ddk-500x500.jpg",
    title: "Poise Wooden King Bed (6x6)",
    price: "669/mo",
  },
  {
    id: 13,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-poise-study-table",
    img: "https://p.rmjo.in/productSquare/d25jc9wi-500x500.jpg",
    title: "Poise Study Table",
    price: "229/mo",
  },
  {
    id: 14,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-napster-bed-lite-65",
    img: "https://p.rmjo.in/productSquare/53rmy7yr-500x500.jpg",
    title: "Napster Metal Queen Bed (6x5)",
    price: "319/mo",
  },
  {
    id: 15,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-aurora-queen-bed",
    img: "https://p.rmjo.in/productSquare/m9qgitpv-500x500.jpg",
    title: "Aurora Wooden Queen Bed (6x5)",
    price: "539/mo",
  },
  {
    id: 16,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-mini-refrigerator",
    img: "https://p.rmjo.in/productSquare/x0to9y4x-500x500.jpg",
    title: "Mini Fridge",
    price: "449/mo",
  },
  {
    id: 17,
    live: "https://www.rentomojo.com/mumbai/furniture/rent-foam-queen-mattress",
    img: "https://p.rmjo.in/productSquare/62hjlf45-500x500.jpg",
    title: "Queen Foam Mattress (6x5)",
    price: "259/mo",
  },
  {
    id: 18,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-dell-xps-9370",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title:
      "Dell XPS 13 , Intel Core i5 processor , 8th Gen - ( 8 GB / 256 GB SSD / Win 10 Pro OS , 13.3 inch,Silver )",
    price: "3679/mo",
  },
  {
    id: 19,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-macbook-air",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title:
      "MacBook Air Intel Core i5 processor , 5th Gen - ( 8 GB / 128 GB SSD / Mac High Sierra OS , 13.3 inch, Silver )",
    price: "1929/mo",
  },
  {
    id: 20,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-hp-15-notebook",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title:
      "HP 15 Notebook , Intel Core i3 processor , 7th Gen  - (4GB / 1TB HDD / Win 10 Home OS / 15.6 inch/ Silver )",
    price: "949/mo",
  },
  {
    id: 21,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-led-tv-32-inches",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: 'LED TV - 32"',
    price: "839/mo",
  },
  {
    id: 22,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-oneplus-7-pro",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "OnePlus 7 Pro (Mirror Gray)",
    price: "1479/mo",
  },
  {
    id: 23,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-oneplus-7",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "OnePlus 7 (Mirror Gray)",
    price: "989/mo",
  },
  {
    id: 24,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-inverter-air-conditioner",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Inverter Air Conditioner 1 Ton",
    price: "1939/mo",
  },
  {
    id: 25,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-samsung-galaxy-note10",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Samsung Galaxy Note 10 (Aura Black)",
    price: "1979/mo",
  },
  {
    id: 26,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-apple-iphone-11",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Apple iPhone 11 (Black)",
    price: "1919/mo",
  },
  {
    id: 27,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-apple-iphone-11-pro-midnight-green",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Apple iPhone 11 Pro (Midnight Green)",
    price: "2979/mo",
  },
  {
    id: 28,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-single-door-fridge-190-litre",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Single Door Fridge (190 Litre)",
    price: "719/mo",
  },
  {
    id: 29,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-smart-led-tv-32-inches",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: 'Smart LED TV - 32"',
    price: "849/mo",
  },
  {
    id: 30,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-ac-1-ton",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Air Conditioner 1 Ton",
    price: "1859/mo",
  },
  {
    id: 31,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-ac-1-5-ton",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Air Conditioner 1.5 Ton",
    price: "2269/mo",
  },
  {
    id: 32,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-dishwasher",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "IFB Dishwasher",
    price: "1409/mo",
  },
  {
    id: 33,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-oneplus-7t-pro-haze-blue",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "OnePlus 7T Pro (Haze Blue)",
    price: "1639/mo",
  },
  {
    id: 34,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-samsung-galaxy-note-10-plus",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Galaxy Note 10 Plus (Aura Glow)",
    price: "2419/mo",
  },
  {
    id: 35,
    live: "https://www.rentomojo.com/mumbai/fitness-equipment/rent-motorized-treadmill-af-515",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Motorized Treadmill AF-515",
    price: "2359/mo",
  },
  {
    id: 36,
    live: "https://www.rentomojo.com/mumbai/fitness-equipment/rent-ctm-14a-motorized-treadmill",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Motorized Treadmill CTM 14A",
    price: "2099/mo",
  },
  {
    id: 37,
    live: "https://www.rentomojo.com/mumbai/electronics/rent-apple-iphone-xs",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Apple iPhone XS (Gold)",
    price: "2919/mo",
  },
  {
    id: 38,
    live: "https://www.rentomojo.com/mumbai/appliances/rent-single-door-fridge-170-litre",
    img: "https://www.rentomojo.com/public/images/loader/image-loader.gif",
    title: "Single Door Fridge (170 Litre)",
    price: "659/mo",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 4.5, pagination: false },
];

export default function HomeCarousel() {
  return (
    <div className="carousel-main">
      <div className="carousel-wrapper">
        <Box
          marginBottom={"5px"}
          marginLeft={{ base: "13%", sm: "22%", md: "12%", lg: "13%" }}
          textAlign={"left"}
          color={"#313131"}
        >
          <Text
            fontSize={"22px"}
            fontWeight={"600"}
            fontFamily={"Muli, sans-serif"}
          >
            You'll love to
          </Text>
          <Text fontSize={"22px"} fontFamily={"Muli, sans-serif"}>
            take these home
          </Text>
          <Box
            backgroundColor={"#dc3236"}
            borderRadius={"5px"}
            width={"3em"}
            height={"2.5px"}
            bottom={"-12px"}
          ></Box>
        </Box>
        <Carousel breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link key={el.id} style={{ textDecoration: "none" }} to="">
              <Box
                key={el.id}
                width={"265px"}
                height={"370px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"20px"}
                margin={"18px"}
                padding={"20px"}
                backgroundColor={"#fff"}
                boxShadow={
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
                }
                cursor={"pointer"}
              >
                <Box height={"222px"} width={"222px"}>
                  <Image
                    src={el.img}
                    alt="carousel-img"
                    height={"100%"}
                    width={"100%"}
                  />
                </Box>

                <Text
                  overflow={"hidden"}
                  fontSize={"18px"}
                  color={"#313131"}
                  fontFamily={"Muli,sans-serif"}
                  textAlign={"start"}
                >
                  {el.title}
                </Text>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Box textAlign={"left"}>
                    <Text fontSize={"12px"} color={"#BABABA"}>
                      Rent
                    </Text>
                    <Text fontSize={"13px"} color={"#313131"}>
                      ₹ {el.price}
                    </Text>
                  </Box>
                  <Link style={{ textDecoration: "none" }} href="/packages">
                    <Button
                      width={"92px"}
                      height={"33px"}
                      padding={"5px 15px"}
                      fontSize={"14px"}
                      border={" 1px solid #DC3226"}
                      backgroundColor={"transparent"}
                      fontWeight={"100"}
                      color={"#DC3226"}
                      borderRadius={"none"}
                      _hover={{
                        backgroundColor: "#DC3226",
                        textUnderlineOffset: "none",
                        color: "white",
                      }}
                    >
                      See more
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
