import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const LazyMain = dynamic(() => import('../components/layouts/main'), {
    ssr: true
})

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <LazyMain router={router}>
            <Component {...pageProps} />
        </LazyMain>
    )
}

export default MyApp
