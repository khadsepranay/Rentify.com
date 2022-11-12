import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";

export const LoginSignup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return (
        <>
            <Button
                onClick={onOpen}
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
                    cursor: 'pointer'
                }}>
                LOGIN/SIGNUP
            </Button>

            <Modal size={'2xl'} isCentered={true} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody display={'flex'} >
                        <Box>
                            <Image src="./logoImage/login_side.gif" alt="cat-img" width={'400px'} height={"450px"} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={"20px"} marginTop={'-50px'} justifyContent={'center'}>
                           {
                            !clicked ? 
                                <FormControl id="email">
                                    <br/>
                                    <FormLabel>
                                        Enter your name
                                    </FormLabel>
                                    <Input
                                        focusBorderColor="none"
                                        border={'none'}
                                        borderRadius={'none'}
                                        borderBottom={'3px solid lightgray'}
                                        placeholder="Enter your name*"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        required
                                    />
                                    <br/>
                                    <br/>
                                    <FormLabel>
                                        Enter your phone number
                                    </FormLabel>
                                    <Input
                                        focusBorderColor="none"
                                        border={'none'}
                                        borderRadius={'none'}
                                        borderBottom={'3px solid lightgray'}
                                        placeholder="Enter your phone number*"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="number"
                                        required
                                    />
                                    <Stack>
                                        <br />
                                        <Button
                                            bg={'#dc3226'}
                                            color={'white'}
                                            onClick={handleClick}
                                            _hover={{
                                                bg: '#dc3226',
                                            }}>
                                            Continue
                                        </Button>
                                    </Stack>
                                </FormControl>
                            :
                                <FormControl id="otp">
                                    <FormLabel>
                                        Enter your OTP
                                    </FormLabel>
                                    <Input
                                        focusBorderColor="none"
                                        border={'none'}
                                        borderRadius={'none'}
                                        borderBottom={'3px solid lightgray'}
                                        placeholder="Enter your OTP*"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="number"
                                        required
                                    />
                                    <Stack>
                                        <br />
                                        <Button
                                            bg={'#dc3226'}
                                            color={'white'}
                                            onClick={onClose}
                                            _hover={{
                                                bg: '#dc3226',
                                            }}>
                                            Login
                                        </Button>
                                    </Stack>
                                </FormControl>
                            }
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}