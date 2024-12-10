import { getMeal } from '@/lib/meals'
import Image from 'next/image'
import React from 'react'
import classes from './page.module.css'
import { notFound } from 'next/navigation';


export async function generateMetaData({params}){
  const meal = await getMeal(params.slug);
  if(!meal){
    notFound();
  }
  return {
    title:meal.title,
    description:meal.summary,
  }
}
export default async function MealDetail({params}) {
  const meal = await getMeal(params.slug);
  if(!meal){
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g,"<br/>");
  return (
  <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={`https://nextjs-sample-image-bucket.s3.ap-south-1.amazonaws.com/${meal.image}`} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_mail}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main 
      className={classes.instructions}
      dangerouslySetInnerHTML={{
        __html:meal.instructions,
      }}>

    </main>
  </>
  
  )
}
