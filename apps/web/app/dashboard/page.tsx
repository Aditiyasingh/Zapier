"use client"
import { Appbar } from "../../components/Appbar";
import { DarkButton } from "../../components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, HOOKS_URL } from "../config";
import { Linkbutton } from "../../components/buttons/Linkbutton";
import { useRouter } from "next/navigation";

interface Zap {
    "id": string,
    "userId": number,
    "actions": {
        "id": string,
        "ZapId": string,
        "ActionName": string,
        "sortingOrder": number,
        "type": {
            "id": string,
            "name": string
        }
    }[],
    "trigger": {
        "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string,
        }
    } | null
}

function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/zap`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setZaps(res.data.zaps);
                setLoading(false)
            })
    }, []);

    return {
        loading, zaps
    }
}


export default function() {
    const { loading, zaps } = useZaps();
    const router = useRouter();

    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg	 w-full">
                <div className="flex justify-between pr-8 ">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                        router.push("/zap/create");
                    }}>Create</DarkButton>
                </div>
            </div>
        </div>
        {loading ? "Loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps} /> </div>}
    </div>
}

function Avatar({ label }: { label: string }) {
    return <div className="w-[30px] h-[30px] rounded-full bg-slate-700 text-white flex items-center justify-center text-sm uppercase shrink-0">{label?.[0]}</div>
}

function ZapTable({ zaps }: {zaps: Zap[]}) {
    const router = useRouter();

    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
                <div className="flex-1">Name</div>
                <div className="flex-1">ID</div>
                <div className="flex-1">Webhook URL</div>
                <div className="flex-1">Go</div>
        </div>
        {zaps.map(z => <div key={z.id} className="flex border-b border-t py-4 items-center">
            <div className="flex-1 flex gap-1">
                {z.trigger && <Avatar label={z.trigger.type.name} />}
                {z.actions.map(x => <Avatar key={x.id} label={x.type.name} />)}
            </div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1 truncate">{`${HOOKS_URL}/hooks/catch/${z.userId}/${z.id}`}</div>
            <div className="flex-1"><Linkbutton onClick={() => {
                    router.push("/zap/" + z.id)
                }}>Go</Linkbutton></div>
        </div>)}
    </div>
}
