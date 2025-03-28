import {Suspense} from 'react'
import styles from './page.module.css'
import Link from "next/link"
import {MealsGrid} from "@/uicomponents"
import {getMeals} from "@/lib"
import {MealsType} from "@/types"
import {MealsLoadingPage} from './loading-out'

export const metadata = {
    title: 'MEALS',
};
// The section which has the Loading message whilst loading
const Meals = async ()=> {
    const meals: MealsType[] = await getMeals() // Get the Data

    console.log(meals)
    return (
        <MealsGrid meals={meals}/>
    )
}

// The actual Page for all the Meals
const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicious Meals, created <span className={styles.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share You Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    );
}

export default MealsPage;
