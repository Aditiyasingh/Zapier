"use client";
export default function Input({label,placeholder, onChange, type= "text"}: {
    label: string,
    placeholder: string,
    onChange: (e: any) => void ,
    type? : "text" | "password"
} ){
    return <div>    
        <label>{label}</label>
        <input className="border rounded px-4 py-2" placeholder={placeholder} onChange={onChange} type={type} /> 
    </div>

}