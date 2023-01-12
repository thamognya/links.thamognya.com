import './globals.css'
import { Fira_Code } from '@next/font/google'
const fira = Fira_Code({ variable: '--font-fira' })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body className={fira.className}>{children}</body>
        </html>
    )
}
