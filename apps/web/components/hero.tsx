"use client"
import { useRouter } from "next/navigation"
import { Primarybutton } from "./buttons/Primarybutton"
import { Feature } from "./feature"


export const Hero = () => {
    const Router = useRouter()
    return <div className="flex flex-col justify-center items-center h-96 gap-10">
        <div className="text-5xl font-semibold tracking-tight text-neutral-900 ">
        Your tools. Your rules. Any AI
        </div>
        <LowerHero/>
        <div className="flex gap-4">
            <Primarybutton onClick={()=>{Router.push("/signup")}} size="large" >Sign up for free</Primarybutton>
            <Primarybutton onClick={()=>{Router.push("/product")}} size="large" >Learn more</Primarybutton>
        </div>
        <div className= "flex justify-center gap-30">
            <Feature title="450K+" description="Agents Build"></Feature>
            <Feature title="9,000+" description="App integrations with governed access"></Feature>
            <Feature title="3.39M+" description="MCP tool calls completed"></Feature>
        </div>
     
    </div>
}
export const LowerHero = () => {
    return <div className="flex flex-col justify-center items-center max-w-3xl text-neutral-600 leading-relaxed mx-auto">
        <p >
        Zapier gives teams one place to set guardrails, manage model access, and see everything — so
        </p>
        <p>
            everyone can build with AI confidently, on any model, without waiting for permission.
        </p>
    </div>
}

