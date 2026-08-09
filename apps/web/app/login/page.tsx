"use client";
import { Appbar } from "../../components/Appbar";
import { CheckFeature } from "../../components/checkfeatures";
import  Input  from "../../components/input";
import { Primarybutton } from "../../components/buttons/Primarybutton";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                    Join millions worldwide who automate their work using Zapier.
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever for core features"} />
                    </div>
                    <CheckFeature label={"14-day trial of premium features & apps"} />

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <Input onChange={e => {
                        setEmail(e.target.value)
                    }} label={"Email"} type="text" placeholder="Your Email"></Input>
                    <Input onChange={e => {
                        setPassword(e.target.value);
                    }} label={"Password"} type="password" placeholder="Password"></Input>

                    {error && <div className="text-red-600 text-sm pt-2">{error}</div>}

                    <div className="pt-4">
                        <Primarybutton onClick={async () => {
                            setError("");
                            try {
                                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                                    username: email,
                                    password,
                                });
                                localStorage.setItem("token", res.data.token);
                                router.push("/dashboard");
                            } catch (e) {
                                if (axios.isAxiosError(e) && e.response) {
                                    setError(e.response.data?.message ?? "Login failed");
                                } else {
                                    setError("Could not reach the server. Is primary-backend running?");
                                }
                            }
                        }} size="large">Login</Primarybutton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
