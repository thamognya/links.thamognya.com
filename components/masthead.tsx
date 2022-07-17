import Full from '../components/front'
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const LazyVideoBg = dynamic(() => import('./videoBg'), {
    ssr: true
})

const LazyFront = dynamic(() => import('./front'), {
    ssr: true
})

const masthead = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-screen h-screen object-cover"
            >
                <LazyVideoBg />
            </video>
            <div className="font-bold text-black z-10">
                <LazyFront />
            </div>
        </div>
    )
}

export default masthead
