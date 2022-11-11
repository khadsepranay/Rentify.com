import { Box, Button, Container, Text, VStack } from '@chakra-ui/react';

export default function RefundStatus() {
	return (
		<Container maxW={'7xl'}>
			<VStack
				h={'xs'}
				border='1px solid lightgrey'
				borderBottom='3px solid cyan'
				justifyContent='center'
			>
				<Text>You haven't started your subscription with us.</Text>
				<Button
					colorScheme={'teal'}
					borderRadius='0px'
				>
					Start Renting
				</Button>
			</VStack>
		</Container>
	);
}
