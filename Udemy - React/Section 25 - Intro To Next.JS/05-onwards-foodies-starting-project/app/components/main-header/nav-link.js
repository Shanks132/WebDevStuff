'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from "./nav-link.module.css";
export default function NavLink({href,children}) {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? `${classes.link} ${classes.active}` : undefined} href={href}>{children}</Link>
  )
}
