import {
    Circle,
    Container,
    Flex,
    Image
} from "@chakra-ui/react";
import giki_logo from '../assets/giki-logo.svg'
import ModalComponent from "../components/ModalComponent";
import WelocomePage from "./WelocomePage";
import { useRecoilValue } from "recoil";
import { closeState, modalStyles, } from "../state/recoil_state";
import UserInfo from "./UserInfo";
export default function Home() {
    const modalStyle = useRecoilValue(modalStyles);

    const modalFull = modalStyle.full

    return (
        <main className="bg-giki-blue h-screen w-screen">
            <Container h="100%">
                <Flex flexDirection="column" alignItems="center" justifyContent="center" h="100%">
                    <Circle boxShadow='lg' size='230px' bg='white'>
                        <Image className="absolute top-1/3 w-70 " src={giki_logo} />
                    </Circle>
                    <ModalComponent style={modalFull} value='OPEN MODEL'>
                        <WelocomePage />
                    </ModalComponent>
                </Flex>
            </Container>
        </main>
    )
}
