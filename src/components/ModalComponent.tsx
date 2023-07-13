import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { closeState, enableState, modalStyles } from "../state/recoil_state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

export default function ModalComponent(props: any) {
    const modalStyle = props.style;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [enable, setEnable] = useRecoilState(enableState);
    const [close, setClose] = useRecoilState(closeState);
    const btnStyle = useRecoilValue(modalStyles);
    const btnActive = { ...btnStyle.active, w: '100%' }






    useEffect(() => {
        setClose({ ...close, onClose });
        if (modalStyle.size === 'full') {
            setEnable(false)
        } else {
            setEnable(true)
        }

    }, [onClose, setClose, close.closeAll]);
    const handelSubmit = () => {
        onOpen()
        setEnable(true)
    }
    const handelStyle = () => {
        if (modalStyle.size === 'full') {
            return btnActive
        } else {
            return btnStyle.active
        }
    }


    return (
        <>
            <Modal
                isOpen={isOpen} onClose={onClose}
                size={modalStyle.size}
                closeOnOverlayClick={false}
                closeOnEsc={false}

            >
                <ModalOverlay bg='#434343' />
                <ModalContent  >
                    <ModalBody  >
                        {props.children}
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button
                sx={!enable ? handelStyle() : btnStyle.disable}
                className='px-11 mt-20 sm:mt-10 w-[100%] sm:w-[45%]' onClick={handelSubmit}
                isDisabled={enable} >
                {props.value}
            </Button >
        </>
    )
}
