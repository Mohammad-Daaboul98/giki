import { Flex, Icon } from "@chakra-ui/react";
import { stepState } from "../state/recoil_state";
import { useRecoilValue } from "recoil";

export default function Steps() {
    const step = useRecoilValue(stepState);

    return (
        <Flex className="mt-auto w-1/6" justifyContent='space-between' alignItems='center'>
            <Icon viewBox='0 0 200 200' w='10px'>
                <path
                    fill={step.icon1}
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                />
            </Icon>
            <Icon viewBox='0 0 200 200' w='10px'>
                <path
                    fill={step.icon2}
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                />
            </Icon>
            <Icon viewBox='0 0 200 200' w='10px'>
                <path
                    fill={step.icon3}
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                />
            </Icon>
        </Flex>
    )
}
