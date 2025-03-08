import * as React from 'react'
import classes from './page.module.css'
import Image from "next/image";
import { notFound} from "next/navigation";
import {getMeal} from "@/lib";

interface MealsDetailsPageInterface {
    params: Promise<{
        mealSlug: string
    }>
}

const MealsDetailsPage = async ({params}: MealsDetailsPageInterface) => {
    const {mealSlug} = await params
    const meal = getMeal(mealSlug)

    if (!meal) {
        // Show closest NotFoundPage
        notFound()
    }

    console.log(meal.instructions)
    const mealInstructions = meal.instructions.replaceAll('\n', '<br />')
    console.log(mealInstructions)

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt="" fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: mealInstructions
                }}></p>
            </main>
        </>
    );
}

export default MealsDetailsPage;
