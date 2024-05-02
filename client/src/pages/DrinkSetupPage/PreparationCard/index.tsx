import styles from './Preparation.module.scss';
import themeStyles from 'styles/theme.module.scss'
import Garnish from './Garnish';
import Glassware from './Glassware';
import StepsList from './StepsList';


export default function PreparationCard() {

    return (
        <section className={`${styles.preparation_card} ${themeStyles.card}`} >
            <h2>Preparation Methods</h2>
            <StepsList />
            <Garnish />
            <Glassware />
        </section>
    )
};