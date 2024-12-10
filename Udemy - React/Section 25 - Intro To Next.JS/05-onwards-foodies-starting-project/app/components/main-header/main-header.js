
import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";
export default function MainHeader() {
  
  return (
    <>
  
    <MainHeaderBackground/>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="plateWithFood" />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink  href={"/meals"}>browse meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
