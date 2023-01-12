import { BsLinkedin } from 'react-icons/bs'

const SocialMedia = (props: any) => {
    return (
        <>
            <div className={`${props.color} hover:scale-125`}>
                <div className="flex justify-between items-center gap-x-2">
                    {props.name} {props.children}
                </div>
            </div>
            {props.children}
        </>
    )
}

export default function Home() {
    return (
        <main>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-screen h-screen object-cover"
                >
                    <source
                        src="https://cdn.jsdelivr.net/gh/Thamognya/thamognya.com-assets@master/bg.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="font-bold text-black z-10 text-3xl">
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-2 grid-cols-2 place-items-center h-screen gap-y-2 gap-x-10">
                        <SocialMedia name="LinkedIn" color="bg-blue-500">
                            <BsLinkedin />
                        </SocialMedia>
                        <h1>Reddit</h1>
                        <h1>Github</h1>
                        <h1>Gitea</h1>
                        <h1>Gitlab</h1>
                        <h1>CV</h1>
                        <h1>Email</h1>
                        <h1>Blog</h1>
                        <h1>Research</h1>
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
