import styles from './DrinkHeader.module.css';
import pageStyle from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import CostDisplay from "pages/DrinkSetupPage/DrinkSetupHeader/CostDisplay";
import DrinkName from "pages/DrinkSetupPage/DrinkSetupHeader/DrinkName";
import CollectionDatalist from "./CollectionDatalist";

export default function DrinkSetupHeader() {

    return (
        <header className={`${pageStyle.card} ${styles.drink_setup_header}`}>
                <CollectionDatalist />
                <DrinkName />
                <CostDisplay />
        </header>
    )
};