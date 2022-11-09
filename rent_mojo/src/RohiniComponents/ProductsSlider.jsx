import React from 'react';
import { Box, Button, Flex, IconButton, Image, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaChevronLeft, FaChevronRight, IconName } from "react-icons/fa";
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { BsSafe2 } from "react-icons/bs";
import { } from "react-icons/io";
import { IoChevronForwardOutline } from 'react-icons/io5';



// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    slide: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default function ProductsSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(0);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '0%', md: '50%', sm: "10%" });
    const side = useBreakpointValue({ base: '0%', md: '10px', sm: "38%" });

    // These are the images used in the slide
    const cards = [
        'https://s.rmjo.in/WP-Web.png',
        'https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg',
        'https://s.rmjo.in/AC-Offer-Banner-Web-.jpg',
        'https://s.rmjo.in/Paytm-Offer-banner-for-web.jpg',
        'https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg'
    ];

    return (
        <Box width={{ base: '95%', sm: '95%', md: '95%', lg: '95%' }} margin={'auto'} marginTop={'15px'} fontSize={{ base: "13px", md: "10px", sm: "10px", lg: "13px" }}>
            <Box
                position={'relative'}
                height={'425px'}
                width={'full'}
                margin={'auto'}
                overflow={'visible'}
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
                    borderRadius={'full'}
                    position="absolute"
                    left={side}
                    height={'50px'}
                    width={'50px'}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <FaChevronLeft />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="gray"
                    borderRadius={'full'}
                    position="absolute"
                    right={side}
                    top={top}
                    height={'50px'}
                    width={'50px'}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <FaChevronRight />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((url, index) => (
                        <Box
                            height={'xl'}
                        >
                            <Box key={index} gap={'30px'}>
                                <Image src={url} />
                                <Text>Products</Text>
                                <Flex justifyContent={'space-between'} alignItems={'center'}>
                                    <Box textAlign={'left'}>
                                        <Text fontSize={'12px'} color={'gray'}>Rent</Text>
                                        <Text>₹ 449/mo</Text>
                                    </Box>
                                    <Button>See more</Button>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>

        </Box>
    );
}