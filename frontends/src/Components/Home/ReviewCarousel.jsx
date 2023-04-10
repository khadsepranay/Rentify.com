import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
// And react-slick as our Carousel Lib
import Slider from "react-slick";


const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ReviewCarousel() {

  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%",sm:"90%", md: "50%"});
  const side = useBreakpointValue({ base: "5%", md: "40px",lg:"10%"});

  // This list contains all the data for carousels
  const cards = [
    {
      name: "Kushal Tiwari",
      text: "Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come.",
      image:
        "https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg",
    },
    {
      name: "Navin Kumar",
      text: "When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D",
      image:
        "https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg",
    },
    {
      name: "Anjali Sharma",
      text: "I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.",
      image:
        "https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg",
    },
    {
      name: "Shreyas Ravetkar",
      text: "Rentomojo was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. The customer support staff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. :)",
      image:
        "https://www.rentomojo.com/public/images/testimonials/shreyas-ravetkar.jpg",
    },
    {
      name: "Nikita Sharma",
      text: "The thought of renting the furniture had never occurred to me. When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb. I don’t have to carry the same furniture to every house I move to and can change the look of my home whenever I want 😬",
      image:
        "https://www.rentomojo.com/public/images/testimonials/nikita-sharma.jpg",
    },
    {
      name: "Manish Srivastava",
      text: "I was suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done ☺. No tension for delivery, Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Rentomojo. It made my house a happy home!",
      image:
        "https://www.rentomojo.com/public/images/testimonials/manish-srivastava.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={{ xl: "536px", md: "536px" , base:"434px" }}
      width={{base:"90%", md:"65%", sm:"90%", lg:"70%"}}
      m="auto"
      overflow={"hidden"}
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
        variant="outline"
        borderRadius="full"
        bg="white"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoChevronBackSharp size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="outline"
        borderRadius="full"
        bg="white"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoChevronForwardSharp size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ lg: "536px", md: "536px" , base:"95%", sm:"90%"}}
            position="relative"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // border="1px solid black"
          >
            {/* This is the block you need to change, to customize the caption */}
            {/* xl : 556 , 536 base : 243.33  434 */}
            <Box
              height={{ xl: "536px", md: "536px" , base:"434px"}}
              bg="#f5f7fa"
              position="relative"
            //   border="1px solid red"
              borderRadius="20px"
              w={{ xl: "556px", md: "380px"}}
              m="auto"
              boxSizing="border-box"
              px="20px"
            >
              <Flex
                // border="1px solid green"
                // spacing={2}
                w={{ xl: "100%", md: "90%" , base:"80%" }}
                maxW={"lg"}
                position="absolute"
                top="16%"
                transform="translate(0, -50%)"
                alignItems="center"
              >
                <Box
                  h={{ base: "60px", md: "82px", xl: "82px" }}
                  w={{ base: "60px", md: "82px", xl: "82px" }}
                //   border="1px solid blue"
                  mr="16px"
                >
                  <Image
                    h="100%"
                    w="100%"
                    src={card.image}
                    alt={card.name}
                    borderRadius="full"
                  />
                </Box>
                <Text fontSize={{ lg: "18px" , base:"14px"}} color="#313131">
                  {card.name}
                </Text>
              </Flex>
              <Box
                // border="1px solid black"
                position="absolute"
                top="28%"
                padding={{sm:"0px", lg:"20px"}}
                w={{ xl: "92%", md: "90%" , base:"80%" }}
              >
                <Text fontSize={{base:"12px", md:"14px", lg:"16px"}} color={"#717171"} lineHeight={'1.5'}>
                  {card?.text}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
