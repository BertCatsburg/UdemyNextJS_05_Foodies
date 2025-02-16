'use client'

import styles from "@/uicomponents/NavLink/NavLink.module.css"
import Link from "next/link"
import {usePathname} from "next/navigation"
import React from 'react'


type NavLinkType = {
    href: string;
    children: React.ReactNode;
}

export const NavLink = ({href, children}: NavLinkType) => {

    const path = usePathname()

    return (
        <Link
            href={href}
            className={
                path.startsWith(href) ?
                    `${styles.active} ${styles.link}` :
                    styles.link
            }
        >
            {children}
        </Link>
    )
}