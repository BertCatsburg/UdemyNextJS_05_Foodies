import DB from 'better-sqlite3'
import {MealsType} from "@/types";

export const getMeals= (): MealsType[] => {
    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const stmt: DB.Statement = db.prepare('SELECT * FROM meals');
    return stmt.all() as MealsType[];
}

