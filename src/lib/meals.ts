import DB from 'better-sqlite3'
import {MealsType} from "@/types";

export const getMeals= async (): Promise<MealsType[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const stmt: DB.Statement = db.prepare('SELECT * FROM meals');

    return stmt.all() as MealsType[];
}

export const getMeal = async (slug: string): Promise<MealsType> => {
    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const stmt: DB.Statement = db.prepare('SELECT * FROM meals WHERE slug = ?')

    return stmt.get(slug) as MealsType
}


