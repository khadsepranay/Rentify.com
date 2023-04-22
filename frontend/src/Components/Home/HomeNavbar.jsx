import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  VStack,
} from "@chakra-ui/react";
import "./HomeCart/HomeCart.css";
import { Link as RefLink, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoCartOutline } from "react-icons/io5";
import { SearchBar } from "./SearchBar";
import { HomeCart } from "./HomeCart/HomeCart";
import rentifyName from "./Images/logoImage/rentifyName.jpg";
import rentifyLogo from "./Images/logoImage/rentifyLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { login } from "../../Redux/User/actionTypes";
import { getData, newProductAdded } from "../../Redux/Cart/actions";
import { isNewItemAdded } from "../../Redux/Cart/actionTypes";

export default function HomeNavbar() {
  let Auth = useSelector((state) => state.Auth);
  let isLogin = Auth.isLogin;
  let CartData = useSelector((state) => state.Cart.CartData);
  let NewProductAdded = useSelector((state) => state.Cart.NewProductAdded);

  let dispatch = useDispatch();
  let Navigate = useNavigate();

  let token = JSON.parse(localStorage.getItem("rentifyToken")) || null;
  const { isOpen, onToggle } = useDisclosure();
  let [name, setName] = useState("");
  let [tempName, setTempName] = useState("");
  let [data, setData] = useState([]);
  const [displayDiv, setDisplayDiv] = useState({ display: "none" });
  let [searchValue, setSearchValue] = useState("");
  let [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (NewProductAdded) {
      dispatch(getData());
      dispatch(newProductAdded(false));
    }
  }, [NewProductAdded]);

  useEffect(() => {
    if (!token) {
      Navigate("/");
    }
    axios
      .get("https://tender-lime-pike.cyclic.app/user/getname", {
        headers: {
          token,
        },
      })
      .then((res) => {
        if (res.data.name === "JsonWebTokenError") {
          console.log(res.data);
        } else {
          setName(res.data);
          setTempName(res.data);
          dispatch({ type: login, payload: true });
          dispatch(getData());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://tender-lime-pike.cyclic.app/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let newData = data;
    let FilteredData = newData.filter((el) => {
      return el.title.includes(searchValue);
    });
    if(searchValue==''){
      FilteredData=[]
    }
    setTimeout(()=>{
      setFilterData(FilteredData);
    },800)
  }, [searchValue]);

  let handleLogout = () => {
    dispatch({ type: login, payload: false });
    dispatch({ type: isNewItemAdded, payload: false });
    localStorage.removeItem("rentifyToken");
    Navigate("/");
  };

  const handleDisplay = () => {
    setDisplayDiv({ display: "block" });
  };

  const RemoveDisplay = () => {
    setDisplayDiv({ display: "none" });
  };

  let handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box
      style={{
        position: "fixed",
        zIndex: "1000",
        width: "100%",
        top: "0px",
        backgroundColor: "#ffffff",
      }}
      boxShadow={"0px 4px 10px 0 rgb(0 0 0 / 16%)"}
      onClick={() => setSearchValue(null)}
    >
      <Box
        width={{ base: "98%", sm: "98%", md: "98%", lg: "98%", xl: "75%" }}
        margin={"auto"}
        boxSizing={"border-box !important"}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justifyContent={"space-evenly"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <RefLink to="/">
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  cursor={"pointer"}
                  href="/home"
                >
                  <Image
                    src={rentifyLogo}
                    alt="logo-img"
                    width="35px"
                    rounded={"full"}
                  />
                  <Image
                    src={rentifyName}
                    alt="name-img"
                    height="30px"
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                  />
                </Box>
              </RefLink>
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={5}>
              <DesktopNav
                handleChange={handleChange}
                filterData={filterData}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ sm: "0", base: "0", md: "6", lg: "6", xl: "6" }}
          >
            {isLogin ? (
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                width={{ base: "100px", sm: "100px" }}
              >
                <span>
                  <IoCartOutline />
                  <Text fontSize={"14px"} fontWeight={400} color={"#313131"}>
                    <HomeCart
                      handleDisplay={handleDisplay}
                      RemoveDisplay={RemoveDisplay}
                    />
                  </Text>
                </span>
                <div
                  style={displayDiv}
                  onMouseEnter={handleDisplay}
                  onMouseLeave={RemoveDisplay}
                  className="hover-div"
                >
                  <Box style={{ cursor: "auto" }}>
                    {CartData &&
                      CartData.map((el) => {
                        return (
                          <Box
                            key={el._id}
                            style={{
                              display: "flex",
                              paddingBottom: "10px",
                              gap: "20px",
                              alignItems: "center",
                              justifyContent: "left",
                            }}
                          >
                            <Image
                              src={el.product.image}
                              style={{ width: "55px", height: "34px" }}
                            />
                            <Box sx={{ overflow: "hidden", textAlign: "left" }}>
                              {el.product.title}
                            </Box>
                          </Box>
                        );
                      })}
                  </Box>
                  <RefLink to="/cart">
                    <Stack>
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          padding: "10px 0px 10px 0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Take me to cart
                      </button>
                    </Stack>
                  </RefLink>
                </div>
              </Button>
            ) : null}
            {isLogin ? (
              <Button
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  _hover: {
                    backgroundColor: "#E90303",
                    color: "white",
                    width: "140px",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "ease-out",
                  },
                }}
                onMouseEnter={() => setName("Logout")}
                onMouseLeave={() => setName(tempName)}
                onClick={() => handleLogout()}
              >
                {name}
              </Button>
            ) : (
              <RefLink to="/login">
                <Button
                  sx={{
                    backgroundColor: "#E90303",
                    color: "white",
                    fontSize: "12px",
                    _hover: {
                      backgroundColor: "#ff3333",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "ease-out",
                    },
                  }}
                >
                  LOGIN/SIGNUP
                </Button>
              </RefLink>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = ({ handleChange, filterData, searchValue }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <VStack>
        <SearchBar
          handleChange={handleChange}
          filterData={filterData}
          searchValue={searchValue}
        />
      </VStack>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={""}
        href={"#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                <li>{child.label}</li>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Login/Sign Up",
    href: "/login",
  },
  {
    label: "Categories >",
    children: [
      {
        label: "Packages",
        subLabel: "Find your dream design job",
        href: "/packages",
      },
      {
        label: "Furniture",
        subLabel: "An exclusive list for contract work",
        href: "/furniture",
      },
      {
        label: "Appliances",
        subLabel: "An exclusive list for contract work",
        href: "/appliances",
      },
      {
        label: "Electronics",
        subLabel: "An exclusive list for contract work",
        href: "/electronics",
      },
      {
        label: "Fitness",
        subLabel: "An exclusive list for contract work",
        href: "/fitness",
      },
    ],
  },
  {
    label: "Read More >",
    href: "#",
  },
  {
    label: "Need Help    >",
    href: "#",
  },
];
