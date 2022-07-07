import Image from 'next/image'

const Front = () => {
    return (
    <>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 place-items-center h-screen">
            <img className="rounded-full hover:scale-125 transform-gpu" src="/pfp.jpeg" width="100" />
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75"><a href="https://www.thamognya.com" target="_blank" rel="noreferrer">Website</a></h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75">Github</h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75">Personal Gitea</h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75">CV</h1>
            <h1 className="p-5 rounded-full bg-zinc-400 bg-opacity-75">Linkedin</h1>
        </div>
    </>
    )
}

export default Front