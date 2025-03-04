// import * as sqlite3 from 'sqlite3'
// import {OPEN_READWRITE, OPEN_FULLMUTEX} from "sqlite3";
//
// export const getMeals = () => {
//     sqlite3.verbose()
//     const db = new sqlite3.Database('./data/foodies.db', OPEN_READWRITE | OPEN_FULLMUTEX)
//     console.log("DB = ")
//     console.log(db)
//     const meals = db.run('SELECT * FROM meals')
//     console.log('Meals in meals.ts')
//     console.log(meals)
//     console.log('*****')
//     return meals
// }


// ==================  https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md
import * as Sqlite from 'better-sqlite3'
import {DatabaseConstructor} from 'better-sqlite3'

export const getMeals = () => {
    const options: Sqlite.Options = {fileMustExist: true, verbose: console.log}
    const db = new Database('./data/foodies.db', options)
}