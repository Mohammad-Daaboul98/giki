import Steps from "./Steps";
import LanguagePage from "../Page/LanguagePage";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Container, Flex } from "@chakra-ui/react";
import { closeState, enableState, modalStyles, stepState } from "../state/recoil_state";
import Category from "../Page/Category";

export default function Popup() {

  const [step, setStep] = useRecoilState(stepState);
  const [close, setclose] = useRecoilState(closeState);
  const [enable, setEnable] = useRecoilState(enableState);
  const [value, setValue] = useState('NEXT')
  const btnStyle = useRecoilValue(modalStyles);


  let back = close.back

  useEffect(() => {
    if (back) {
      setValue('Pick 3 more')
      setStep((step) => ({ ...step, icon3: '#FF8C1E' }));
    } else {
      setValue('NEXT')
      setStep((step) => ({ ...step, icon2: '#FF8C1E' }));
    }

  }, [back])






  const handelClose = () => {
    if (back) {
      setclose({ ...close, back: false })
      setStep((step) => ({ ...step, icon3: 'currentColor' }));
    } else {
      setStep((step) => ({ ...step, icon2: 'currentColor' }));
      close.onClose()
    }
    setEnable(false)
  }

  const handlePage = () => {
    setclose({ ...close, back: true })
    if (step.icon3 === '#FF8C1E') {
      setStep((step) => ({ ...step, icon2: 'currentColor', icon3: 'currentColor' }));
      setclose({ ...close, back: false, closeAll: true })
    }
    setEnable(true)
  }

  return (
    <section id="popup" className="p-5" >
      <Flex flexDirection='column' alignItems='center'>
        {back ? <Category /> : <LanguagePage />}

        <Container className="mb-5 mt-10" maxW='xs' >
          <Flex flexDirection='column' gap='10px'>
            <Button sx={!enable ? btnStyle.active : btnStyle.disable} onClick={handlePage} isDisabled={enable}>{value}</Button>
            <Button onClick={handelClose} bg='transparent' _hover={{ bg: 'transparent' }}>Back</Button>
          </Flex>
        </Container>
        <Flex justifyContent='center' className="mt-5 w-[100%]">
          <Steps />
        </Flex>
      </Flex>
    </section>
  )
}
