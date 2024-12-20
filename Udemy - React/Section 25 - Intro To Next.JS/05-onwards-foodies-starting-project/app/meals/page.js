import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
async function Meals(){
  const meals = getMeals();
  return <main className={classes.main}>
    <MealsGrid meals={meals}/>
  </main>
}

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your recipe and cook it yourself. It is easy and fun</p>

        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipes</Link>
        </p>
      </header>
      <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
        <Meals/>
      </Suspense>
        
    </>
  );
}
