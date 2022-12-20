import { Fira_Code } from '@next/font/google'
const fira = Fira_Code({ subsets: ['monospace'] })

export default function Home() {
    return (
        <main className={fira.className}>
            <h1>hi==></h1>
        </main>
    )
}
