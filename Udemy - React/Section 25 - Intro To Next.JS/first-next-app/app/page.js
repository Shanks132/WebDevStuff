import Link from "next/link";
import Header from "@/components/header";
import classes from "./globals.css"
export default function Home() {
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p style={classes.p}>
        <Link href="/about">About us</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meals</Link>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
//localhost:3000/about