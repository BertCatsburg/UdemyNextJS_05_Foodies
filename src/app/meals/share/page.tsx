'use client'

import classes from './page.module.css';
import {ImagePicker, FormSubmitButton} from '@/lib'
import {ActionState} from './actionstate'

const ShareMealPage = () => {

    const {state, formAction} = ActionState()

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="creator">Your name</label>
                            <input type="text" id="creator" name="creator" required/>
                        </p>
                        <p>
                            <label htmlFor="creator_email">Your email</label>
                            <input type="email" id="creator_email" name="creator_email" required/>
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required/>
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required/>
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Image of Food" name="image"/>
                    {state.message !== '' && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <FormSubmitButton label="Share Meal" label_while_submitting="Submitting"/>
                    </p>
                </form>
            </main>
        </>
    );
}

export default ShareMealPage