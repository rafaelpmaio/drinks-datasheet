import styles from './DrinkPhoto.module.scss'
import themeStyles from 'styles/theme.module.scss'
import InputFile from 'components/InputFile';
import { useContext } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';


export default function DrinkPhoto() {

    const { setImage } = useContext(DrinkCreationContext);

    return (
        <InputFile
            labelStyle={`${themeStyles.card} ${styles.drink_photo_div}`}
            imageStyle={styles.image}
            inputStyle={styles.input}
            setImage={setImage}
            imageDescription='select the drink photo'
        />
    )
};