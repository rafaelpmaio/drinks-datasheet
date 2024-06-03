import MenuLink from "./MenuLink";
import navStyles from "./MenuLinks.module.scss";
import DialogBox from "components/DialogBox";
import NewCollectionInputs from "components/NewCollectionInputs";
import collectionBuilder from "shared/builders/collectionBuilder";
import { useContext } from "react";
import { CollectionsContext } from "state/CollectionContext";
import { ServerStatusContext } from "state/ServerSatusContext";
import { httpDatasheets } from "httpApi";
import { useNavigate } from "react-router-dom";

export default function MenuLinks() {

    const collectionsContext = useContext(CollectionsContext);
    const { isOnline } = useContext(ServerStatusContext);
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const collection = collectionBuilder(collectionsContext, []);

        if (!isOnline) {
            event.preventDefault();
            collectionsContext.setCollectionsList([
                ...collectionsContext.collectionsList,
                collection,
            ]);
            navigate("/");
            return;
        }

        httpDatasheets.post("collections", collection).then(() => {
            alert("collection created");
        });
    };

    return (
        <>
            <MenuLink hrefPage="/" > Collections </MenuLink>
            <MenuLink hrefPage="/new_drink"> New Drink </MenuLink>
            <DialogBox
                title="Create a new Collection"
                submit
                className={navStyles.link}
                contentText={<NewCollectionInputs />}
                buttonText="New Collection"
                handleSubmit={handleSubmit}
                disabled={!collectionsContext.name}
            />
        </>

    )
}