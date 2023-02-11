import React from 'react'

const SocialMedia = (props: any) => {
    return (
        <>
            <button
                className={`${props.color} hover:${props.hoverColor} hover:scale-125 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out`}
            >
                {props.name}
            </button>
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
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 place-items-center h-screen gap-y-2 gap-x-10">
                        <SocialMedia
                            name="LinkedIn"
                            color="bg-blue-500"
                            hoverColor="bg-blue-700"
                        />
                        <SocialMedia
                            name="Reddit"
                            color="bg-orange-500"
                            hoverColor="bg-orange-700"
                        />
                        <SocialMedia
                            name="GitHub"
                            color="bg-black"
                            hoverColor="bg-gray-900"
                        />
                        <SocialMedia
                            name="Gitea"
                            color="bg-green-500"
                            hoverColor="bg-green-700"
                        />
                        <SocialMedia
                            name="GitLab"
                            color="bg-red-500"
                            hoverColor="bg-red-700"
                        />
                        <SocialMedia
                            name="CV"
                            color="bg-purple-500"
                            hoverColor="bg-purple-700"
                        />
                        <SocialMedia
                            name="Email"
                            color="bg-teal-500"
                            hoverColor="bg-teal-700"
                        />
                        <SocialMedia
                            name="Blog"
                            color="bg-pink-500"
                            hoverColor="bg-pink-700"
                        />
                        <SocialMedia
                            name="Research"
                            color="bg-indigo-500"
                            hoverColor="bg-indigo-700"
                        />
                       <SocialMedia
                            name="Projects"
                            color="bg-yellow-500"
                            hoverColor="bg-yellow-700"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
