import * as React from 'react'
import classes from './page.module.css'
import Image from "next/image";
import {getMeal} from "@/lib";

interface MealsDetailsPageInterface {
    params: Promise<{
        slug: string
    }>
}

const MealsDetailsPage = async ({params}: MealsDetailsPageInterface) => {
    const {slug} = await params

    const meal = getMeal(slug)
    console.log(meal)

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src="" alt="" fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>TITLE</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'EMAIL'}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>SUMMARY</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: '...'
                }}></p>
            </main>
        </>
    );
}

export default MealsDetailsPage;
