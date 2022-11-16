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
	VStack,
} from '@chakra-ui/react';
import './HomeCart/HomeCart.css';
import { Link as RefLink } from 'react-router-dom';
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';
import { IoCartOutline } from 'react-icons/io5';
import LoginSignup from './LoginSignup';
import { SearchBar } from './SearchBar';
import { HomeCart } from './HomeCart/HomeCart';
import { NavSelectTag } from './NavSelectTag';
import rentifyName from '../../Images/logoImage/rentifyName.jpg';
import rentifyLogo from '../../Images/logoImage/rentifyLogo.png';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react"
import axios from "axios"

export default function HomeNavbar() {
	const { cart } = useSelector((state) => state.Item);
	const { isOpen, onToggle } = useDisclosure();

	const [displayDiv, setDisplayDiv] = useState({ display: 'none' });

	const handleDisplay = () => {
		setDisplayDiv({ display: 'block' });
	};
	const RemoveDisplay = () => {
		setDisplayDiv({ display: 'none' });
	};

	let [searchValue,setSearchValue] = useState("")
    let [data,setData] = useState([])
    let [filterData,setFilterData] = useState([])
    function handleChange(e){
		setSearchValue(e.target.value)
    }

    useEffect(()=>{
        axios.get("https://rent-mojo-server.onrender.com/entire").then((res)=>{
            setData(res.data)
        })
    },[])

    useEffect(()=>{
        let newData = data
        let FilteredData = newData.filter((el)=>{
            return el.title.includes(searchValue)
        })
        setFilterData(FilteredData)
		
    },[searchValue]);


	return (
		<Box
			style={{
				position: 'fixed',
				zIndex: '100',
				width: '100%',
				marginTop: '-90px',
				backgroundColor: '#ffffff',
			}}
			boxShadow={'0px 4px 10px 0 rgb(0 0 0 / 16%)'}
		>
			<Box
				width={{ base: '95%', sm: '95%', md: '95%', lg: '75%' }}
				margin={'auto'}
				boxSizing={'border-box !important'}
			>
				<Flex
					bg={useColorModeValue('white', 'gray.800')}
					color={useColorModeValue('gray.600', 'white')}
					minH={'60px'}
					py={{ base: 2 }}
					px={{ base: 4 }}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.900')}
					align={'center'}
				>
					<Flex
						flex={{ base: 1, md: 'auto' }}
						ml={{ base: -2 }}
						display={{ base: 'flex', md: 'none' }}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon
										w={3}
										h={3}
									/>
								) : (
									<HamburgerIcon
										w={5}
										h={5}
									/>
								)
							}
							variant={'ghost'}
							aria-label={'Toggle Navigation'}
						/>
					</Flex>
					<Flex
						flex={{ base: 1 }}
						justify={{ base: 'center', md: 'start' }}
					>
						<Text
							textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
							fontFamily={'heading'}
							color={useColorModeValue('gray.800', 'white')}
						>
							<RefLink to='/'>
								<Box
									display={'flex'}
									gap={'10px'}
									alignItems={'center'}
									cursor={'pointer'}
									href='/home'
								>
									<Image
										src={rentifyLogo}
										alt='logo-img'
										width='35px'
										rounded={'full'}
									/>
									<Image
										src={rentifyName}
										alt='name-img'
										height='30px'
									/>
								</Box>
							</RefLink>
						</Text>

						<Flex
							display={{ base: 'none', md: 'flex' }}
							ml={5}
						>
							<DesktopNav handleChange = {handleChange} filterData={filterData} searchValue={searchValue} />
						</Flex>
					</Flex>

					<Stack
						flex={{ base: 1, md: 0 }}
						justify={'flex-end'}
						direction={'row'}
						spacing={6}
					>
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
								color={'#313131'}
							>
								<HomeCart
									handleDisplay={handleDisplay}
									RemoveDisplay={RemoveDisplay}
								/>
							</Text>
							{cart.length === 0 ? null : (
								<div
									style={displayDiv}
									onMouseEnter={handleDisplay}
									onMouseLeave={RemoveDisplay}
									className='hover-div'
								>
									{cart.map((el) => (
										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
												marginBottom: '10px',
												border: '1px solid lightgray',
												padding: '5px',
											}}
										>
											<img
												src={el.img}
												width={'80px'}
											/>
											<div style={{ width: '100%', padding: '10px' }}>
												<Text
													whiteSpace={'break-spaces'}
													textAlign={'left'}
													fontSize={'14px'}
												>
													{el.title}
												</Text>
												<br />
											</div>
										</div>
									))}
									<RefLink to='/cart'>
										<Stack>
											<button
												style={{
													backgroundColor: 'red',
													color: 'white',
													padding: '10px 0px 10px 0px',
													fontSize: '14px',
													fontWeight: 'bold',
												}}
											>
												Take me to cart
											</button>
										</Stack>
									</RefLink>
								</div>
							)}
						</Button>
						<LoginSignup />
					</Stack>
				</Flex>

				<Collapse
					in={isOpen}
					animateOpacity
				>
					<MobileNav />
				</Collapse>
			</Box>
		</Box>
	);
}

const DesktopNav = ({handleChange, filterData, searchValue}) => {
	return (
		<Stack
			direction={'row'}
			spacing={4}
		>
			<Box>
				<NavSelectTag />
			</Box>
			<VStack>
			<SearchBar handleChange = {handleChange} filterData={filterData} searchValue={searchValue}/>
			</VStack>
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
			display={{ md: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					key={navItem.label}
					{...navItem}
				/>
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack
			spacing={4}
			onClick={children && onToggle}
		>
			<Flex
				py={2}
				as={''}
				href={'#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}
				>
					{label}
				</Text>
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: '0!important' }}
			>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								py={2}
								href={child.href}
							>
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
		label: 'Login/Sign Up',
		href: '/login',
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
