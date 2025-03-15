'use server'

import {redirect} from 'next/navigation'
import {saveMeal} from "@/lib/meals";
import {MealsTypeOnScreen} from '@/types'

export const shareMeal = async (formData: FormData) => {
    const meal: MealsTypeOnScreen = {
        title: formData.get('title') as string ?? "",
        image: formData.get('image') as File ?? "",
        summary: formData.get('summary') as string ?? "",
        instructions: formData.get('instructions') as string ?? "",
        creator: formData.get('creator') as string ?? "",
        creator_email: formData.get('creator_email') as string ?? "",
    }
    await saveMeal(meal)

    redirect("/meals")
}