import Image from 'next/image'
import { 
    FaLinkedin,
    FaGithub,
    FaBlogger,
} from "react-icons/fa";

import { 
    SiGitea,
} from "react-icons/si";

import {
    CgWebsite
} from "react-icons/cg";

// change frmo h1 to a to link everything

const Front = () => {
    return (
    <>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2 gap-x-10 place-items-center h-screen">
            <a href="https://links.thamognya.com" target="_blank" rel="noreferrer" >
                <img className="rounded-full hover:scale-125 transform-gpu" src="/pfp.jpeg" width="100" />
            </a>
            <a href="https://www.thamognya.com" target="_blank" rel="noreferrer" className="py-5 md:px-10 px-20 rounded-full bg-zinc-400 bg-opacity-40 flex items-center">
                <CgWebsite />
                <h1 className="pl-2">Website</h1>
            </a>
            <a href="https://github.com/Thamognya" target="_blank" rel="noreferrer" className="py-5 md:px-10 px-20 rounded-full bg-gray-900 text-slate-50 bg-opacity-75 flex items-center">
                <FaGithub />
                <h1 className="pl-2">Github</h1>
            </a>
            <a href="https://git.thamognya.com" target="_blank" rel="noreferrer" className="py-5 md:px-10 px-20 rounded-full bg-lime-600 text-slate-50 bg-opacity-75 flex items-center">
                <SiGitea />
                <h1 className="pl-2">Gitea</h1>
            </a>
            <a href="https://github.com/Thamognya" target="_blank" rel="noreferrer" className="py-5 md:px-10 px-20 rounded-full bg-sky-600 text-slate-50 bg-opacity-75 flex items-center">
                <FaLinkedin />
                <h1 className="pl-2">LinkedIn</h1>
            </a>
            <a href="https://blog.thamognya.com" target="_blank" rel="noreferrer" className="py-5 md:px-10 px-20 rounded-full bg-violet-600 text-slate-50 bg-opacity-75 flex items-center">
                <FaBlogger />
                <h1 className="pl-2">Blog</h1>
            </a>
        </div>
    </>
    )
}

export default Front