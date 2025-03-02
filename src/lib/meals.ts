import * as sqlite3 from 'sqlite3'

export const getMeals = async () => {
    const db = new sqlite3.Database('./data/foodies.db')

    // await new Promise((resolve) => setTimeout(resolve, 2000)) // Delay of 2 seconds

    const stmt = db.prepare('SELECT * FROM meals').all();
    const meals = stmt.run(stmt)
    console.log(meals)
    return meals
}



