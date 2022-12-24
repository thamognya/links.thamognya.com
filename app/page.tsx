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
                        <h1>LinkedIN</h1>
                        <h1>reddit</h1>
                        <h1>github</h1>
                        <h1>gitea</h1>
                        <h1>github</h1>
                        <h1>cv</h1>
                        <h1>email</h1>
                        <h1>blog</h1>
                        <h1>research</h1>
                        <h1>projects</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
