import { IDrink } from 'shared/interfaces/IDrink'
import styles from './DrinkDatasheetDecoration.module.scss'

export default function DrinkDatasheetDecoration({ garnish, glassware }: IDrink) {
    return (
        <div className={styles.decoration_div}>
            <span className={styles.decoration_row}>
                <h2 className={styles.decoration_title}>GARNISH</h2>
                <span>{garnish}</span>
            </span>
            <span className={styles.decoration_row}>
                <h2 className={styles.decoration_title}>GLASSWARE</h2>
                <span> {glassware} </span>
            </span>
        </div>
    )
}