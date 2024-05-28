import { IDrink } from 'shared/interfaces/IDrink'
import styles from './DrinkDatasheetDecoration.module.scss'

export default function DrinkDatasheetDecoration({ garnish, glassware }: IDrink) {
    return (
        <div className={styles.decoration_div}>
            <span className={styles.decoration_row}>
                <h2 >GARNISH</h2>
                {garnish}
            </span>
            <span className={styles.decoration_row}>
                <h2 >GLASSWARE</h2>
                {glassware}
            </span>
        </div>
    )
}