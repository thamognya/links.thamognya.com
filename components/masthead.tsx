import Full from '../components/front'
import React from 'react'
import Image from 'next/image'
import Front from './front'

const masthead: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute w-screen h-screen object-cover">
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="font-bold text-black z-10">
                <Front />
            </div>
        </div>
    )
}

export default masthead
