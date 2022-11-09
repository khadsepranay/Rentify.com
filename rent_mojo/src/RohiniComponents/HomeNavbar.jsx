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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { IoCartOutline } from 'react-icons/io5';
import { LoginSignup } from './LoginSignup';
import { SearchBar } from './SearchBar';

export default function HomeNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
      <Box width={{base:'95%', sm:'95%', md:'95%', lg:'75%' }} margin={'auto'}>
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
                          <Image src="./logoImage/Rentify.png" alt="logo-img" width="35px" rounded={'full'} />
                          <Image src="./logoImage/Rentify-name.jpg" alt="name-img" height="30px" />
                      </Box>
                  </Text>

                  <Flex 
                    display={{ base: 'none', md: 'flex' }} 
                    ml={10}>
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
                      <IoCartOutline  />
                      <Text 
                        fontSize={'14px'} 
                        fontWeight={400} 
                        color={'#313131'}>
                         Cart
                      </Text>
                  </Button>
                  <LoginSignup />
              </Stack>
          </Flex>

          <Collapse in={isOpen} animateOpacity>
              {/* <MobileNavItem /> */}
          </Collapse>
      </Box>
  );
}

const DesktopNav = () => {

  return (
      <Stack direction={'row'} spacing={4}>
          <Box>
              <Select
                  width={"120px"}
                  focusBorderColor={'none'}
                  border={'none'}
                  overflow={'visible'}
                  cursor={'pointer'}
                  display={{ base: "none", md: "none", lg: "inline-flex" }}
              >
                  <option value="">Mumbai</option>
                  <option value="">Pune</option>
                  <option value="">Banglore</option>
                  <option value="">Delhi</option>
              </Select>
          </Box>
          <SearchBar/>
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

// const MobileNav = () => {
//     return (
//         <Stack
//             bg={useColorModeValue('white', 'gray.800')}
//             p={4}
//             display={{ md: 'none' }}>
//             {NAV_ITEMS.map((navItem) => (
//                 <MobileNavItem key={navItem.label} {...navItem} />
//             ))}
//         </Stack>
//     );
// };

// const MobileNavItem = () => {
//     const { isOpen, onToggle } = useDisclosure();

//     return (
//         <Stack spacing={4} onClick={onToggle}>
//             <Flex
//                 py={2}
//                 as={''}
//                 href={'#'}
//                 justify={'space-between'}
//                 align={'center'}
//                 _hover={{
//                     textDecoration: 'none',
//                 }}>
//                 <Text
//                     fontWeight={600}
//                     color={useColorModeValue('gray.600', 'gray.200')}>
//                     Login / Signup
//                 </Text>
//             </Flex>

//             <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//                 <Stack
//                     mt={2}
//                     pl={4}
//                     borderLeft={1}
//                     borderStyle={'solid'}
//                     borderColor={useColorModeValue('gray.200', 'gray.700')}
//                     align={'start'}>
//                 </Stack>
//             </Collapse>
//         </Stack>
//     );
// };

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

