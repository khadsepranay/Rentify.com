import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoDribbble } from "react-icons/io";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"650"} fontSize={"13"} mb={2} color={"#8b8b8c"}>
      {children}
    </Text>
  );
};

const Textcomp = ({ children }) => {
  return (
    <Text fontWeight={"350"} fontSize={"13"} mb={2} color={"#cdcfd1"}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="#f5f7fa" marginTop={"50px"} fontFamily={"Muli, sans-serif"}>
      <Container maxW={"6xl"} py={20}>
        <Box textAlign={"left"}>
          <ListHeader>
            <Text fontSize={"14px"} color={"#717171"}>
              {" "}
              Embrace Your Dream Lifestyle With RentoMojo In Mumbai
            </Text>
          </ListHeader>
          <Textcomp>
            <Text fontSize={"12px"} color={"#717171"}>
              RentoMojo is one of India’s best-known rental brands with a
              pan-India presence. You can rent furniture, appliances, and
              electronics from us in Mumbai for a monthly fee. Instead of paying
              tens of thousands to purchase said items from a store, you can
              rent them from us at a discounted price.
            </Text>
          </Textcomp>
          <Textcomp>
            <Text fontSize={"12px"} color={"#717171"}>
              RentoMojo provides very reasonable rental rates, allowing you to
              save a great deal of money. We offer convenient rental options,
              short-term and long-term. Our long-term plans offer maximum
              savings. No matter what plan you sign up for, you receive added
              benefits from us such as free relocation, damage waiver, and free
              maintenance.
            </Text>
          </Textcomp>
          <Textcomp>
            <Text fontSize={"12px"} color={"#717171"}>
              You’ll find top-rated, best-selling products in our inventory,
              made by the most dependable brands in the market. You can rent any
              item from us online in a matter of minutes. After we process your
              order, we will deliver it to you anywhere in Mumbai. We offer fast
              delivery all over the city, including localities such as Lower
              Parel, Worli, Byculla, Bandra, and Santacruz.
            </Text>
          </Textcomp>
          <Text fontSize={"12px"} color={"#717171"}>
            Read more{" "}
          </Text>
        </Box>
      </Container>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        fontFamily={"Muli, sans-serif"}
        marginTop={"-80px"}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>
                <Text fontSize={"14px"} color={"#313131"}>
                  RENTOMOJO
                </Text>
              </ListHeader>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    About Us
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Culture
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Investors
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Careers
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Contact
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Our Benefits
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Sitemap
                  </Text>
                </Link>
              </Textcomp>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>
                <Text fontSize={"14px"} color={"#313131"}>
                  INFORMATION
                </Text>
              </ListHeader>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Blog
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    FAQs
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Documents Required
                  </Text>
                </Link>
              </Textcomp>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>
                <Text fontSize={"14px"} color={"#313131"}>
                  POLICIES
                </Text>
              </ListHeader>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Shipping Policy
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Cancellation & Return
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Privacy Policy
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Rental Terms & Conditions
                  </Text>
                </Link>
              </Textcomp>
              <Textcomp>
                <Link href={"#"}>
                  <Text fontSize={"12px"} color={"#717171"}>
                    Referral Terms & Conditions
                  </Text>
                </Link>
              </Textcomp>
            </Stack>

            <Stack align={"flex-start"} gap={"5px"}>
              <ListHeader>
                <Text fontSize={"14px"} color={"#313131"}>
                  NEED HELP ?
                </Text>
              </ListHeader>
              <Textcomp>
                <Button
                  backgroundColor={"transparent"}
                  fontSize={"12px"}
                  color={"#717171"}
                  border={"1px solid #000"}
                >
                  Chat with us (9am - 6pm)
                </Button>
              </Textcomp>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <Box>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/4205/4205570.png"
                    width={"18px"}
                  />
                </Box>
                <Box>
                  <a href="mailto:jo@rentomojo.com">
                    <Text fontSize={"12px"} color={"#717171"}>
                      jo@rentomojo.com
                    </Text>
                  </a>
                </Box>
              </Box>
              <ListHeader>
                <Text marginTop={"10px"} fontSize={"14px"} color={"#313131"}>
                  DOWNLOAD APP
                </Text>
              </ListHeader>
              <Box display="flex" gap="17px">
                <a
                  href="https://apps.apple.com/in/app/rentomojo-products-on-rent/id1404801676?_branch_match_id=1052087403742522196&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTNyu1MM8wL3bzigIAWVRPyxsAAAA%3D"
                  target="_blank"
                >
                  <Box>
                    <img
                      src={"./footerImage/play_store.png"}
                      alt="google store"
                    />
                  </Box>
                </a>
                <a
                  href="https://apps.apple.com/in/app/rentomojo-products-on-rent/id1404801676?_branch_match_id=1052087403742522196&utm_source=automation&utm_campaign=App%20Download&utm_medium=Website&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8rNz8rXy8zTNyu1MM8wL3bzigIAWVRPyxsAAAA%3D"
                  target="_blank"
                >
                  <Box>
                    <img src={"./footerImage/ios_store.png"} alt="ios store" />
                  </Box>
                </a>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={6}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text fontSize={"12px"} color={"#717171"} textAlign={"left"}>
              © 2022. Edunetwork Pvt. Ltd.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/rentomojo"}
              >
                <CgFacebook />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/rentomojo"}
              >
                <BsTwitter />
              </SocialButton>
              <SocialButton
                label={"Linkedin"}
                href={"https://www.linkedin.com/company/rentomojo/"}
              >
                <RiLinkedinFill />
              </SocialButton>
              <SocialButton
                label={"Youtube"}
                href={"https://www.youtube.com/c/RentomojoOfficial"}
              >
                <ImYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/rentomojo/"}
              >
                <TiSocialInstagram />
              </SocialButton>
              <SocialButton
                label={"Dribbble"}
                href={"https://dribbble.com/RentoMojo"}
              >
                <IoLogoDribbble />
              </SocialButton>
            </Stack>
            <Flex gap={"5px"} cursor={"pointer"}>
              <Text fontSize={"12px"} color={"#717171"}>
                Go Up{" "}
              </Text>
              <MdOutlineKeyboardArrowUp />
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
