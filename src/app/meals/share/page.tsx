import classes from './page.module.css';
import {ImagePicker} from '@/lib'

export default function ShareMealPage() {

    const shareMail = async (formData: FormData) => {
        'use server'

        const meal = {
            title: formData.get('title'),
            image: formData.get('image'),
            summary: formData.get('summary'),
            instructions: formData.get('instructions'),
            creator: formData.get('creator'),
            creator_email: formData.get('creator_email'),
        }

        console.log(meal)

    }


    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={shareMail}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="creator" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="creator_email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
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
                   <ImagePicker label="plaatje" name="image" />
                    <p className={classes.actions}>
                        <button type="submit">Share Meal</button>
                    </p>
                </form>
            </main>
        </>
    );
}