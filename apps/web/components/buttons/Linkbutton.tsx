import { ReactNode } from "react"

export const Linkbutton = ({children , onClick } :{children: ReactNode, onClick: () => void}) => {
    return <div className= " px-2 py-1 cursor-pointer hover:bg-[#ebe9df] rounded" onClick={onClick}>
        {children}
    </div>
}