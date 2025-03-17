'use client'

import {useActionState} from "react";
import {shareMeal} from "@/lib";

type State = {
    message: string
}

export const ActionState = () =>{

    const [state, formAction] = useActionState<State, FormData>(shareMeal, {message: ''})

    return {
        state,
        formAction
    }
}
