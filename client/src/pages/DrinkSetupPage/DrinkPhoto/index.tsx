import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import InputFile from 'components/InputFile';
import { useContext } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';


export default function DrinkPhoto() {

    const { setImage } = useContext(DrinkCreationContext);

    return (
        <InputFile
            labelStyle={`${pageStyles.card} ${styles.drink_photo_div}`}
            imageStyle={styles.image}
            inputStyle={styles.input}
            setImage={setImage}
            imageDescription='choose an image'
        />
    )
};