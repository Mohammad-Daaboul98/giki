
import {
  Box,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
} from "@chakra-ui/react";
import ModalComponent from '../components/ModalComponent';
import { closeState, enableState, modalStyles, stepState, userInfo } from '../state/recoil_state';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Steps from "../components/Steps";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import EditableControls from "../components/EditableControls";
import UserInfo from "./UserInfo";
export default function WelocomePage() {
  const modalStyle = useRecoilValue(modalStyles);
  const modalXl = modalStyle.xl;
  const modalsm = modalStyle.sm;


  const [step, setStep] = useRecoilState(stepState);
  const [user, setUser] = useRecoilState(userInfo);
  const setEnable = useSetRecoilState(enableState);
  const [name, setName] = useState(user.name)
  const { closeAll } = useRecoilValue(closeState);


  useEffect(() => {
    setStep({ ...step, icon1: '#FF8C1E', icon2: 'currentColor' });
  }, [setStep])



  const handelChange = (e: any) => {
    setName(e.target.value)
  }

  const handelSubmit = () => {
    if (name !== user.name) {
      setUser({ ...user, name })
      setEnable(false)
    }
  }


  return (
    <>
      <Container as='section' id='Wlecome' h='90vh'>
        <Flex h="100%" flexDirection="column" alignItems="center" justifyContent="center" w='100%'>
          <Box className="flex justify-center items-center rounded-[8px] text-white mt-auto" w="120px" h="120px" bg="#434E61">
            <h1 className="text-[50px] font-bold">A</h1>
          </Box>
          <a
            className="mt-4 text-[#B3B3B3] text-[14px] font-medium"
            href="mailto:alice@wonderland.space">
            alice@wonderland.space</a>
          <h1 className="text-[#434E61] text-[28px] font-bold mt-5">Welcome to Giki</h1>
          <Editable
            className="bg-[#F6F6F6] text-[#FF8C1E] font-bold px-5 w-[100%]  sm:w-[45%]   mb-4 mt-2 "
            textAlign='center'
            defaultValue={name}
            fontSize='2xl'
            isPreviewFocusable={false}
            onSubmit={handelSubmit}
          >
            <Flex justifyContent="center" alignItems='center'>
              <EditablePreview ml='auto' />
              <Input as={EditableInput} onChange={handelChange} />
              <EditableControls />
            </Flex>
          </Editable >
          <p className='text-center  text-[13px] font-medium text-[#262626] w-[100%]  sm:w-3/5 '>Your answers to the next few questions will help us find the right communities for you</p>
          <ModalComponent style={!closeAll ? modalXl : modalsm} value='NEXT'>
            {!closeAll ? <Popup /> : <UserInfo />}
          </ModalComponent>
          <Flex justifyContent='center' className="mt-5 w-[100%]">
            <Steps />
          </Flex>
        </Flex>
      </Container >
    </>
  )
}
