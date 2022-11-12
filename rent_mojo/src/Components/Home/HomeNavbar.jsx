import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Select,
} from '@chakra-ui/react';
import "./HomeCart/HomeCart.css";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { IoCartOutline } from 'react-icons/io5';
import { LoginSignup } from './LoginSignup';
import { SearchBar } from './SearchBar';
import { HomeCart } from './HomeCart/HomeCart';
import { NavSelectTag } from './NavSelectTag';
import { useState } from 'react';
import rentifyName from "../../Images/logoImage/rentifyName.jpg"
import rentifyLogo from "../../Images/logoImage/rentifyLogo.png"

export default function HomeNavbar() {
    const { isOpen, onToggle } = useDisclosure();

    const [displayDiv, setDisplayDiv] = useState({ display: "none" });

    const handleDisplay = () => {
        setDisplayDiv({ display: "block" })
    }
    const RemoveDisplay = () => {
        setDisplayDiv({ display: "none" });
    }

    return (
        <Box style={{ position: "fixed", zIndex: "100", width: "100%", marginTop: "-90px", backgroundColor: "#ffffff" }} boxShadow={"0px 4px 10px 0 rgb(0 0 0 / 16%)"}>
            <Box width={{ base: '95%', sm: '95%', md: '95%', lg: '75%' }} margin={'auto'} boxSizing={'border-box !important'}>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'center', md: 'start' }}>
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}>
                            <Box display={'flex'} gap={'10px'} alignItems={'center'} cursor={'pointer'} href="/home">
                                <Image src={rentifyLogo} alt="logo-img" width="35px" rounded={'full'} />
                                <Image src={rentifyName} alt="name-img" height="30px" />
                            </Box>
                        </Text>

                        <Flex
                            display={{ base: 'none', md: 'flex' }}
                            ml={5}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}
                            display={'flex'}
                            alignItems={'center'}
                            gap={'5px'}
                        >
                            <IoCartOutline />
                            <Text
                                fontSize={'14px'}
                                fontWeight={400}
                                color={'#313131'}>

                                <HomeCart handleDisplay={handleDisplay} RemoveDisplay={RemoveDisplay} />

                            </Text>
                            <div style={displayDiv} onMouseEnter={handleDisplay} onMouseLeave={RemoveDisplay} className="hover-div">
                                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <img src="./logoImage/login_side.gif" width={"100px"} />
                                    <div >
                                        <Text fontSize={"20px"}>cat gif</Text>
                                        <br />
                                        <button style={{ backgroundColor: "red", color: "white", padding: "8px" }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <LoginSignup />
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </Box>
    );
}

const DesktopNav = () => {

    return (
        <Stack direction={'row'} spacing={4}>
            <Box>
                <NavSelectTag />
            </Box>
            <SearchBar />
        </Stack>
    );
};

// const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//         <Link
//             href={href}
//             role={'group'}
//             display={'block'}
//             p={2}
//             rounded={'md'}
//             _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//             <Stack direction={'row'} align={'center'}>
//                 <Box>
//                     <Text
//                         transition={'all .3s ease'}
//                         _groupHover={{ color: 'pink.400' }}
//                         fontWeight={500}>
//                         {label}
//                     </Text>
//                     <Text fontSize={'sm'}>{subLabel}</Text>
//                 </Box>
//                 <Flex
//                     transition={'all .3s ease'}
//                     transform={'translateX(-10px)'}
//                     opacity={0}
//                     _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//                     justify={'flex-end'}
//                     align={'center'}
//                     flex={1}>
//                     <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//                 </Flex>
//             </Stack>
//         </Link>
//     );
// };

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
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
                as={''}
                href={'#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
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
        href: "/login"
    },
    {
        label: 'Categories >',
        children: [
            {
                label: 'Packages',
                subLabel: 'Find your dream design job',
                href: './packages',
            },
            {
                label: 'Furniture',
                subLabel: 'An exclusive list for contract work',
                href: './furniture',
            },
            {
                label: 'Appliances',
                subLabel: 'An exclusive list for contract work',
                href: './appliances',
            },
            {
                label: 'Electronics',
                subLabel: 'An exclusive list for contract work',
                href: './electronics',
            },
            {
                label: 'Fitness',
                subLabel: 'An exclusive list for contract work',
                href: './fitness',
            },
        ],
    },
    {
        label: 'Read More >',
        href: '#',
    },
    {
        label: 'Need Help    >',
        href: '#',
    },
];

