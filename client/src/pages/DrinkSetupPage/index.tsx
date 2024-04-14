import React, { useContext } from "react";
import DrinkSetupHeader from "pages/DrinkSetupPage/DrinkSetupHeader";
import IngredientsCard from "pages/DrinkSetupPage/IngredientsCard";
import PreparationCard from "./PreparationCard";
import DrinkPhoto from "pages/DrinkSetupPage/DrinkPhoto";
import styles from "./DrinkSetupPage.module.css";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import drinkBuilder from "shared/builders/drinkBuilder";
import validateDrink from "errors/validateDrink";
import { CollectionsContext } from "state/CollectionContext";
import Button from "components/Button";
import { httpDatasheets } from "httpApi";

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
    <form onSubmit={handleSubmit}>
      <DrinkSetupHeader />
      <main>
        <IngredientsCard />
        <div className={styles.preparation_and_drink_photo_block}>
          <PreparationCard />
          <DrinkPhoto />
        </div>
      </main>
      <Button type="submit">Save</Button>
    </form>
  );
}
