import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

const main = ({ children, router }: any) => {
    return (
        <div className="font-fira">
            <div>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Thamognya's Link" />
                <meta name="author" content="Thamognya Kodi" />
                <meta name="keywords" content="Thamognya, Kodi, Links" />
                <link rel="shortcut icon" href="/pfp.jpeg" />
                <title>Thamognya Kodi - Links - {router.asPath}</title>
            </div>
            {children}
        </div>
    )
}

export default main
