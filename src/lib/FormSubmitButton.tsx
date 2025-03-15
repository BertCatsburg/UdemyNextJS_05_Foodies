'use client'

import {useFormStatus} from "react-dom";

type FormSubmitButtonType = {
    label: string;
    label_while_submitting: string | null;
}

export const FormSubmitButton = ({label, label_while_submitting}: FormSubmitButtonType) => {
    const {pending} = useFormStatus()

    const process_label_while_submitting = label_while_submitting ?? "Submitting"

    return (
        <button type="submit" disabled={pending}>
            {pending ? process_label_while_submitting : label}
        </button>
    )
}