import DB from 'better-sqlite3'
import {MealsType, MealsTypeOnScreen} from "@/types"
import slugify from "slugify"
import xss from 'xss'
import { v4 as uuidv4 } from 'uuid'
import fs from 'node:fs'

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


export const saveMeal = async (meal: MealsTypeOnScreen) => {
    const options: DB.Options = {fileMustExist: true, verbose: console.log}
    const db = new DB('./data/foodies.db', options)

    const slug = slugify(meal.title, {lower: true})  // Creating the Slug based on title
    const instructions = xss(meal.instructions)  // Sanitize and Clean the instructions field
    const extension = meal.image.name.split('.').pop()  // Get last element in splitted array: The extension
    const filename = `${slug}_${uuidv4()}.${extension}`

    // Store Image on the File System, in the public folder
    const stream = fs.createWriteStream(`public/images/${filename}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving Image Failed', error)
        }
    })

    const mealImage = `/images/${filename}`
    const stmt: DB.Statement = db.prepare(`
            INSERT INTO meals
              ( title,  summary,  instructions,  creator,  creator_email,  image,  slug)
            VALUES
              (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `)

    stmt.run({
        title: meal.title,
        summary: meal.summary,
        instructions: instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        image: mealImage,
        slug: slug
    })
}


