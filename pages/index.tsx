import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

const LazyMasthead = dynamic(() => import('../components/masthead'), {
    ssr: true
})
const Home: NextPage = () => {
    return (
        <>
            <LazyMasthead />
        </>
    )
}

export default Home
