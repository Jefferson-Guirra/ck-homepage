'use client'
import { ReactNode, createContext, useContext, useState } from 'react';

interface ContextType {
    active: boolean,
    handleMenuMob: () => void
}

interface Props {
    children: ReactNode
}

const HeaderContext = createContext<ContextType>(null!)

export const HeaderStorage = ({ children }: Props) => {

    const [active, setActive] = useState<boolean>(false)

    const handleMenuMob = () => {
        setActive(state => !state)
    }

    return (
        <HeaderContext.Provider value={{ active, handleMenuMob}}>
             {children}
        </HeaderContext.Provider>
    )

}

export const useHeaderContext = () => useContext(HeaderContext)