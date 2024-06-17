import { HeaderStorage } from "./header/HeaderContext"

interface ContextProps {
    children: JSX.Element
}

export const AppProvider = ({ children } : ContextProps) =>  {
    return(
        <HeaderStorage>
            {children}
        </HeaderStorage>
    )

}