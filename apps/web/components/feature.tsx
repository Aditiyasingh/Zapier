 export const Feature =({title, description}: {title: string ,description: string}) =>{
        return <div className="flex flex-col ">
            <div className="pl-2 text-[#ff4f00] font-normal text-2xl flex justify-center">
                {title}
            </div>
            <div className="pl-2 text-xs">
                {description}
            </div>
            
        </div>
 }