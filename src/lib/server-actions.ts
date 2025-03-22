'use server'

import {redirect} from 'next/navigation'
import {saveMeal} from "@/lib/meals";
import {MealsTypeOnScreen} from '@/types'
import {revalidatePath} from "next/cache";

const isInvalidText = (text: string | null) => {
    return !text || text.trim() == '';
}

type State = {
    message?: string | null;
}

export const shareMeal = async (prevState: State, formData: FormData): Promise<{message: string}> => {

    console.log(prevState)

    const meal: MealsTypeOnScreen = {
        title: formData.get('title') as string ?? "",
        image: formData.get('image') as File ?? "",
        summary: formData.get('summary') as string ?? "",
        instructions: formData.get('instructions') as string ?? "",
        creator: formData.get('creator') as string ?? "",
        creator_email: formData.get('creator_email') as string ?? "",
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.creator) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0 ||
        meal.title === "XXX"
    ) {
        // Returning data from the server to the page.
        return {
            message: 'Invalid Input'
        }
    }

    await saveMeal(meal)
    revalidatePath("/meals", "layout")
    redirect("/meals")
}