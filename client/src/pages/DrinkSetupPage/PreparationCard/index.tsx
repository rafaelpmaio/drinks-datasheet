import styles from './Preparation.module.scss';
import themeStyles from 'styles/theme.module.scss'
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import Button from 'components/Button';
import PreparationInputs from 'components/PreparationInputs';


export default function PreparationCard() {

    const { steps } = useContext(DrinkCreationContext);

    return (
        <section className={`${styles.preparation_card} ${themeStyles.card}`} >
            <h2 className={styles.header}>Preparation</h2>
            <PreparationInputs />
            <ul className={styles.list}>
                {steps.map((step, index) => (
                    <li key={index} className={styles.steps_list}>
                        <b className={styles.step_prefix}>{`Step ${index + 1}:  `}</b>
                        {step}
                        <Button
                            type="delete"
                            onClick={(e) => {
                                e.preventDefault();
                                steps.splice(index, 1);
                            }}
                        >
                            x
                        </Button>
                    </li>
                ))}
            </ul>
        </section>
    )
};