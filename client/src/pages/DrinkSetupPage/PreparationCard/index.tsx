import styles from './PreparationCard.module.scss';
import themeStyles from 'styles/theme.module.scss'
import { useContext } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import Button from 'components/Button';
import PreparationInputs from 'components/PreparationInputs';
import { MdDelete } from 'react-icons/md';


export default function PreparationCard() {

    const { steps, setSteps } = useContext(DrinkCreationContext);

    return (
        <section className={`${styles.preparation_card} ${themeStyles.card}`} >
            <h2 className={styles.title}>Preparation</h2>
            <PreparationInputs />
            <h2 className={styles.subtitle}>Steps</h2>
            <ul className={styles.list}>
                {steps.map((step, index) => (
                    <li key={index} className={styles.list_item}>
                        <span className={styles.step}>
                            <b>{`Step ${index + 1}:  `}</b>
                            {step}
                        </span>
                        <Button
                            type="delete"
                            className={styles.deleteBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                const updatedList = steps.toSpliced(index, 1);
                                setSteps(updatedList)
                            }}
                        >
                            <MdDelete className="1x" />
                        </Button>
                    </li>
                ))}
            </ul>
            <Button className={styles.submitBtn} type="submit">Create</Button>

        </section>
    )
};