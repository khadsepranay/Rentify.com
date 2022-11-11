import {
	Box,
	Container,
	Flex,
	Image,
	Input,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';

export default function Referrals() {
	return (
		<Container maxW={'7xl'}>
			<Box
				bg='#1dbdc0'
				bgImage='https://www.rentomojo.com/public/images/referral/referral-bg.png'
				bgPos={'right'}
				bgRepeat='no-repeat'
				h='xs'
			>
				<Flex>
					<VStack
						alignItems='flex-start'
						justifyContent='space-between'
						p={4}
					>
						<Text>Refer a friend, save on rent!</Text>
						<Text align={'left'}>
							Earn ₹25 when your friend signs up on rentomojo and up to ₹200
							when your friend orders successfully.
						</Text>
						<Text>
							Refer more to earn more!{' '}
							<Link textDecoration={'underline'}>Click here for details</Link>
						</Text>
						<Box>
							<Input
								type='email'
								borderRadius={24}
							/>
							<Input
								type='email'
								borderRadius={24}
							/>
						</Box>
					</VStack>
					<Box>
						<Image
							src='https://www.rentomojo.com/public/images/referral/sorted_new.png'
							alt='referral-img'
						/>
					</Box>
				</Flex>
			</Box>
			<VStack
				border='1px solid lightgrey'
				borderBottom='3px solid cyan'
				h='xs'
				// alignItems='center'
				justifyContent='center'
			>
				<Text fontSize='20px'>NO REFERRALS</Text>
				<Text>
					Uh oh! You don't have any referrals yet. Refer your friends to earn
					RentoMoney in your account for every successful referral.
				</Text>
			</VStack>
		</Container>
	);
}
