import React, { useContext } from "react";
import DrinkSetupHeader from "pages/DrinkSetupPage/DrinkSetupHeader";
import IngredientsCard from "pages/DrinkSetupPage/IngredientsCard";
import PreparationCard from "./PreparationCard";
import styles from "./DrinkSetupPage.module.scss";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import drinkBuilder from "shared/builders/drinkBuilder";
import { CollectionsContext } from "state/CollectionContext";
import { httpDatasheets } from "httpApi";
import CollectionDatalist from "./CollectionDatalist";
import { ICollection } from "shared/interfaces/ICollection";
import { IDrink } from "shared/interfaces/IDrink";
import { ServerStatusContext } from "state/ServerSatusContext";
import { useNavigate } from 'react-router-dom';


const createDrinkAtDb = (selectedCollection: ICollection, drink: IDrink) => {
  httpDatasheets
    .post("drinks", {
      collectionId: selectedCollection._id,
      ...drink,
    })
    .then(() => {
      alert("drink saved!");
    });
}

export default function DrinkSetupPage() {
  const drinkContext = useContext(DrinkCreationContext);
  const { selectedCollection, collectionsList, setCollectionsList } = useContext(CollectionsContext);
  const { isOnline } = useContext(ServerStatusContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const drink = drinkBuilder(drinkContext);

    if (!isOnline) {
      event.preventDefault();
      const updatedDrinks = [...selectedCollection.drinksList, drink];
      const updatedCollectionsList = collectionsList.map((col) => {
        if (col._id === selectedCollection._id) {
          return {
            ...col,
            drinksList: updatedDrinks
          };
        }
        return col;
      });
      setCollectionsList(updatedCollectionsList);
      navigate(`/collection/${selectedCollection._id}#${selectedCollection.name}`)
      return
    }

    createDrinkAtDb(selectedCollection, drink)
  };

  return (
    <main >
      < form onSubmit={handleSubmit} className={styles.drink_setup_page_div} >
        <DrinkSetupHeader />
        <CollectionDatalist />
        <IngredientsCard />
        <PreparationCard />
      </form >
    </main>
  );
}
