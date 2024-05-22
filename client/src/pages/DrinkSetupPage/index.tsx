import React, { useContext } from "react";
import DrinkSetupHeader from "pages/DrinkSetupPage/DrinkSetupHeader";
import IngredientsCard from "pages/DrinkSetupPage/IngredientsCard";
import PreparationCard from "./PreparationCard";
import styles from "./DrinkSetupPage.module.scss";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import drinkBuilder from "shared/builders/drinkBuilder";
import validateDrink from "errors/validateDrink";
import { CollectionsContext } from "state/CollectionContext";
import Button from "components/Button";
import { httpDatasheets } from "httpApi";
import CollectionDatalist from "./CollectionDatalist";

export default function DrinkSetupPage() {
  const drinkContext = useContext(DrinkCreationContext);
  const { selectedCollection } = useContext(CollectionsContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    // MÉTODO PARA NAVEGAR PARA A COLEÇÃO ATUALIZADA, PRECISA IMPLEMENTAR COM WEBSOCKET
    // const { setHeaderData } = useContext(DynamicHeaderContext);
    // const navigate = useNavigate();
    // let collectionNameWithoutSpecialChars = removeSpecialCharsFromString(
    //   selectedCollection.name
    // );
    // const header = headerBuilder(
    //   selectedCollection.image,
    //   selectedCollection.name,
    //   selectedCollection.description
    // );
    // dentro do Handler VV
    // setHeaderData(header);
    // navigate(
    //   `/collection/${selectedCollection._id}#${collectionNameWithoutSpecialChars}`
    // , {unstable_viewTransition: true});

    const drink = drinkBuilder(drinkContext);

    validateDrink(drinkContext);

    httpDatasheets
      .post("drinks", {
        collectionId: selectedCollection._id,
        ...drink,
      })
      .then(() => {
        alert("drink saved!");
      });
  };

  return (
    <main >
      < form onSubmit={handleSubmit} className={styles.drink_setup_page_div} >
        <DrinkSetupHeader />
        <CollectionDatalist />
        <IngredientsCard />
        <PreparationCard />
        <Button className={styles.submitBtn} type="submit">Save Drink</Button>
      </form >
    </main>
  );
}
