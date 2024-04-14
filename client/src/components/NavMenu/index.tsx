import styles from "./NavMenu.module.css";
import MenuLink from "./MenuLink";
import NewCollectionDiv from "components/NavMenu/NewCollectionDiv";

export default function NavMenu() {

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink hrefPage="/" > Collections </MenuLink>
                <MenuLink hrefPage="/new_drink"> New Drink </MenuLink>
                <NewCollectionDiv />
            </nav>
        </header>
    )
}