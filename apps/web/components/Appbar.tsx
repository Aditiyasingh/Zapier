"use client"
import { Linkbutton } from "./buttons/Linkbutton"
import { useRouter } from "next/navigation"
import { Primarybutton } from "./buttons/Primarybutton"

export const Appbar = () => {
    const Router = useRouter()
    
    return <div className="flex border-b border-gray-200 justify-between p-4">
        <div className="flex gap-4 flex flex-col md:flex-row">
            <div className="flex flex-col justify-center text-2xl font-extrabold ">
                Zapier
            </div>
            <Linkbutton onClick = {() => {Router.push("/product")}}>
                Product
            </Linkbutton>
            <Linkbutton onClick = {() => {Router.push("/Solutions")}}>
                Solutions
            </Linkbutton>
            <Linkbutton onClick = {() => {Router.push("/resources")}}>
                Resources
            </Linkbutton>
            <Linkbutton onClick = {() => {Router.push("/about")}}>
                Enterprise
            </Linkbutton>
            <Linkbutton onClick = {() => {Router.push("/pricing")}}>
                Pricing
            </Linkbutton>
        </div>
        
        <div className="flex gap-2">
            <Linkbutton onClick = {() => {}}> Contact sales </Linkbutton>
            <Linkbutton onClick ={() => {Router.push("/login")}}>Log in</Linkbutton>
            <Primarybutton onClick={()=>{
                Router.push("/signup")
            }}>Sign up</Primarybutton>
        </div>
    </div>
}