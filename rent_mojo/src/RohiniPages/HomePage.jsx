import {
	Box,
	Flex,
	Grid,
	GridItem,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import AutoSlider from '../RohiniComponents/AutoSlider';
import HomeNavbar from '../RohiniComponents/HomeNavbar';
import ProductsSlider from '../RohiniComponents/ProductsSlider';

const iconsDiv = [
	{
		id: '1',
		icon: './extraImages/packages.jpg',
		iconName: 'Packages',
	},
	{
		id: '2',
		icon: './extraImages/furniture.jpg',
		iconName: 'Furniture',
	},
	{
		id: '3',
		icon: './extraImages/appliances.jpg',
		iconName: 'Appliances',
	},
	{
		id: '4',
		icon: './extraImages/electronics.jpg',
		iconName: 'Electronics',
	},
	{
		id: '5',
		icon: './extraImages/fitness.jpg',
		iconName: 'Fitness',
	},
	{
		id: '6',
		icon: './extraImages/wfh.jpg',
		iconName: 'WFH Essentials',
	},
];

export const HomePage = () => {
	return (
		<Box>
			<HomeNavbar />
			<AutoSlider />
			{/* // Passing `columns={[2, null, 3]}` and `columns={{ sm: 2, md: 3 }}`
            // will have the same effect. */}
			<Box
				width={{ base: '95%', sm: '95%', md: '95%', lg: '75%' }}
				margin={'auto'}
				marginTop={'50px'}
			>
				<SimpleGrid
					columns={[4, 4, 4, 6]}
					spacing='25px'
				>
					{iconsDiv.map((el) => (
						<Box
							key={el.id}
							cursor={'pointer'}
							height='120px'
							border={'1px solid #e2eaf0'}
							borderRadius={'10px'}
							_hover={{
								background: '#fff',
								boxShadow:
									'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
							}}
						>
							<Flex
								direction={'column'}
								alignItems={'center'}
								justifyContent={'center'}
								padding={'30px'}
							>
								<Image
									src={el.icon}
									alt='icon-image-1'
									width={'30px'}
								/>
								<Text>{el.iconName}</Text>
							</Flex>
						</Box>
					))}
				</SimpleGrid>
			</Box>
			<ProductsSlider />
		</Box>
	);
};
