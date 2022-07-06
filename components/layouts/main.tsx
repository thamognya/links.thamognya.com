import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

const main = ({ children, router }: any) => {
    return (
        <div class="font-fira">
            {children}
        </div>
    )
}

export default main
