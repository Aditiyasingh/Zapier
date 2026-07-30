import { ReactNode } from "react"

export const Primarybutton = ({ children, onClick, size = "small" }: {
    children: ReactNode,
    onClick: () => void,
    size?: "small" | "medium" | "large"
}) => {
    return (
        <div 
            onClick={onClick} 
            className={`
                bg-[#ff4f00] text-white rounded-full cursor-pointer font-semibold 
                hover:bg-[#e64500] transition-colors duration-200
                ${size === "small" ? "text-sm px-6 py-2" : "text-xl px-10 py-4"}
            `}
        >
            {children}
        </div>
    )
}