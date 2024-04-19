import styles from './Preparation.module.scss';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.scss'
import Garnish from './Garnish';
import Glassware from './Glassware';
import StepsList from './StepsList';


export default function PreparationCard() {

    return (
        <section className={`${styles.preparation} ${pageStyles.card}`} >
            <h2>Preparation Methods</h2>
            <StepsList />
            <Garnish />
            <Glassware />
        </section>
    )
};