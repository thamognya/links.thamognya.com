import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Main router={router}>
            <Component {...pageProps} />
        </Main>
    )
}

export default MyApp
