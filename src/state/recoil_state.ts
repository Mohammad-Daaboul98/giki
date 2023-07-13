import { atom } from "recoil";

export const modalStyles = atom({
    key: "modalStyles",
    default: {
        full: { size: 'full' },
        xl: { size: '2xl' },
        sm: { size: 'xs' },
        active: {
            bg: "#FF8C1E",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            ':hover': {
                bg: '#FF8C1E'
            }
        },
        disable: {
            _disabled: {
            bg: "#B3B3B3",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            ':hover': {
                bg: '#B3B3B3'
            }
        }
        }

    }
});
export const stepState = atom({
    key: "stepState",
    default: {
        icon1: <string>'currentColor',
        icon2: <string>'currentColor',
        icon3: <string>'currentColor'
    }
})
export const closeState = atom({
    key: "closeState",
    default: {
        onClose: () => { },
        back: <boolean>false,
        closeAll: <boolean>false
    }
})
export const userInfo = atom({
    key: "userInfo",
    default: {
        name: <string>"Alice",
        language: <string>'',
        country: <string>'',
        interest: <string[]>[]
    }
})
export const enableState = atom({
    key: "enableState",
    default: <boolean>true
})
