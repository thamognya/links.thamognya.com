import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import Nav from '../navbar'

const main = ({ children, router }: any) => {
    return (
        <div className="font-fira">
                <div>
                    <meta charSet="UTF-8" /> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Thamognya's Link" />
                    <meta name="author" content="Thamognya Kodi" />
                    <meta name="keywords" content="Thamognya, Kodi, Links" />
                    <link rel="shortcut icon" href="/pfp.jpeg" /> 
                    <title>Thamognya Kodi - Links - {router.asPath}</title>
                </div>
                <div className="container mx-auto md:px-20 px-5">
                    <Nav router={router}/>
                        {children}
                </div>
        </div>
    )
}

export default main
