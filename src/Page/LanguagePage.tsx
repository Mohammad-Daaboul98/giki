import { Container, Select } from "@chakra-ui/react";
import { enableState, userInfo } from "../state/recoil_state";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect, useState } from 'react'

export default function LanguagePage() {
    const [user, setUser] = useRecoilState(userInfo);
    const setEnable = useSetRecoilState(enableState);
    const [select] = useState({
        country: '',
        language: ''
    });

    useEffect(() => {
        if (select.country !== user.country && select.language !== user.language) {
            setEnable(false)
        }
    }, [select, user])

    const handleCountry = (e: any) => {
        setUser({ ...user, country: e.target.value })

    }
    const handleLanguage = (e: any) => {
        setUser({ ...user, language: e.target.value })
    }

    return (

        <section id='language'  className=" text-center h-[100%] w-[100%] sm:w-2/4  md:w-2/4 lg:w-2/4" >
            <h1 className="text-[#434E61] text-[28px] font-bold mb-20">Pick your language and country/region</h1>
            <Container className="mb-auto">
                <Select
                    size='md'
                    className="text-[#B3B3B3] font-medium mb-3 outline-0 border-none"
                    bg='#F6F6F6' fontSize='14px'
                    placeholder={user.country}
                    onChange={(e) => handleCountry(e)}>

                    <option value='English'>English (US)</option>
                    <option value='Syria'>Syria</option>
                    <option value='USA'>USA</option>
                    <option value='Germany'>Germany</option>
                </Select>
                <Select
                    className="text-[#B3B3B3] font-medium outline-0 border-none"
                    bg='#F6F6F6'
                    fontSize='14px'
                    placeholder={user.language}
                    onChange={(e) => handleLanguage(e)}>
                    <option value='Italy'>Italy (Italia)</option>
                    <option value='Arabic'>Arabic</option>
                    <option value='german'>german</option>
                    <option value='italian'>italian</option>
                </Select>
            </Container>

        </section >
    )
}
