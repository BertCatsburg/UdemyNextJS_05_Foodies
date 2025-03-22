import Link from 'next/link';
import Image from 'next/image';
import {MealsType} from "@/types";
import classes from './meal-item.module.css';

export const MealItem = ({ title, slug, image, summary, creator }: MealsType) => {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={`https://nextjscourse.s3.us-east-1.amazonaws.com/${image}`} alt={title} fill sizes="(max-width: 1200px) 100%" priority={true} />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}