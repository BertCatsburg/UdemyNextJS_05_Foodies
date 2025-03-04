import styles from './page.module.css'
import Link from "next/link";
import {MealsGrid} from "@/uicomponents";
import {getMeals} from "@/lib";
import {MealsType} from "@/types";

const MealsPage = async () => {

    const meals: MealsType[] = getMeals()

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
                <MealsGrid meals={meals}/>
            </main>
        </>
    );
}

export default MealsPage;
