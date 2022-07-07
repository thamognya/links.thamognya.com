import Image from 'next/image'
import { 
    FaLinkedin,
} from "react-icons/fa";

import { 
    SiGitea,
} from "react-icons/si";

// change frmo h1 to a to link everything

const Front = () => {
    return (
    <>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 place-items-center h-screen">
            <img className="rounded-full hover:scale-125 transform-gpu" src="/pfp.jpeg" width="100" />
            <h1 className="p-2 rounded-full bg-zinc-400 bg-opacity-75 flex items-center">
                <a href="https://www.thamognya.com" className="pl-2" target="_blank" rel="noreferrer">Website</a>
            </h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75 flex items-center">
                <a href="https://www.thamognya.com" className="pl-2" target="_blank" rel="noreferrer">Github</a>
            </h1>
            <h1 className="p-5 rounded-full bg-lime-600 text-slate-50 bg-opacity-75 flex items-center">
                <SiGitea />
                <a href="https://git.thamognya.com" className="pl-2" target="_blank" rel="noreferrer">Personal Gitea</a>
            </h1>
            <h1 className="p-5 rounded-full bg-sky-600 text-slate-50 bg-opacity-75 flex items-center">
                <FaLinkedin />
                <a href="https://www.thamognya.com" className="pl-2" target="_blank" rel="noreferrer"> LinkedIn</a>
            </h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75 flex items-center">
                <a href="https://www.thamognya.com" className="pl-2" target="_blank" rel="noreferrer">Blog</a>
            </h1>
        </div>
    </>
    )
}

export default Front