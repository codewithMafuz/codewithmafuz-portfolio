import React from 'react'
import Link from 'next/link'

export default function CustomLink({ children, href = "#", target = "_blank" }: { children: React.ReactNode, href: string, target: string }) {
    return (
        <Link href={href} target={target}>
            {children}
        </Link>
    )
}

