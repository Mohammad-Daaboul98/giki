import { Button, Container, Flex, List, ListIcon, ListItem, ModalFooter, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { closeState, modalStyles, userInfo } from '../state/recoil_state';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function UserInfo() {
    const user = useRecoilValue(userInfo);
    const [close, setClose] = useRecoilState(closeState);
    const btnStyle = useRecoilValue(modalStyles);
    const setUser = useSetRecoilState(userInfo);


    const handelClose = () => {
        if (close.closeAll) {
            close.onClose()
            setClose({ ...close, closeAll: false });
            setUser({
                name: "Alice",
                language: '',
                country: '',
                interest: []
              })
        }
    }

    return (
        <Container className='py-5'>
            <Flex flexDirection='column' alignItems='start' gap='5px'>
                <Text>user name: {user.name}</Text>
                <Text>user language: {user.language}</Text>
                <Text>user country: {user.country}</Text>
                user interest: {user.interest.map((item, index) => (
                    <List key={index} spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.500' />
                            {item}
                        </ListItem>

                    </List>

                ))}
            </Flex>
            <ModalFooter>
                <Button sx={btnStyle.active} onClick={handelClose}>
                    Close
                </Button>
            </ModalFooter>
        </Container>
    )
}
