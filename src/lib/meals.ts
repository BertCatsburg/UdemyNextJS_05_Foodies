import DB from 'better-sqlite3'
import {MealsType} from "@/types";
import slugify from "slugify";
import xss from 'xss';

export const getMeals= async (): Promise<MealsType[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const stmt: DB.Statement = db.prepare('SELECT * FROM meals');

    return stmt.all() as MealsType[];
}

export const getMeal = (slug: string): MealsType => {
    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const stmt: DB.Statement = db.prepare('SELECT * FROM meals WHERE slug = ?')

    return stmt.get(slug) as MealsType
}


export const saveMeal = (meal: MealsType) => {
    console.log(meal)

    const slug = slugify(meal.title, {lower: true})  // Creating the Slug based on title
    const instructions = xss(meal.instructions)  // Sanitize and Clean the instructions field



}


