import styles from './meals-grid.module.css'
import {MealItem} from "@/uicomponents/Meals/meal-item";
import {MealsType} from "@/types";

type MealsGridType = {
    meals: MealsType[]
}

export const MealsGrid = ({meals}: MealsGridType) => {
    return (
        <ul className={styles.meals}>
            {
                meals.map(meal => {
                    return (
                        <li key={meal.id}>
                            <MealItem {...meal} />
                        </li>
                    );
                })
            }
        </ul>
    )
}