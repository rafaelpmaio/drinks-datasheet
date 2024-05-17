import styles from "./NavMenu.module.scss";
import MenuLink from "./MenuLink";
import navStyles from "./NavMenu.module.scss";
import DialogBox from "components/DialogBox";
import NewCollectionInputs from "components/NewCollectionInputs";
import collectionBuilder from "shared/builders/collectionBuilder";
import { useContext } from "react";
import { CollectionsContext } from "state/CollectionContext";
import { ServerStatusContext } from "state/ServerSatusContext";
import { httpDatasheets } from "httpApi";

export default function NavMenu() {

    const collectionsContext = useContext(CollectionsContext);
    const { isOnline } = useContext(ServerStatusContext);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const collection = collectionBuilder(collectionsContext, []);
    
        if (!isOnline) {
          event.preventDefault();
          collectionsContext.setCollectionsList([
            ...collectionsContext.collectionsList,
            collection,
          ]);
          return;
        }
    
        httpDatasheets.post("collections", collection).then(() => {
          alert("collection created");
        });
      };

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink hrefPage="/" > Collections </MenuLink>
                <MenuLink hrefPage="/new_drink"> New Drink </MenuLink>
                <DialogBox
                    title="Create a new Collection"
                    submit
                    className={navStyles.link}
                    contentText={<NewCollectionInputs />}
                    buttonText="New Collection"
                    handleSubmit={handleSubmit}
                />
            </nav>
        </header>
    )
}