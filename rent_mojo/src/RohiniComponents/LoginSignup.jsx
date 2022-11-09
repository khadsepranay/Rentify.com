import { Button } from "@chakra-ui/react"

export const LoginSignup = () => {
    return (
        <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'12px'}
            fontWeight={400}
            color={'white'}
            bg={'#dc3226'}
            href={'#'}
            borderRadius={'10px'}
            p={'0px 20px'}
            _hover={{
                bg: 'transparent',
                border: '1px solid red',
                color: '#dc3226',
                cursor:'pointer'
            }}>
            LOGIN / SIGNUP
        </Button>
    )
}