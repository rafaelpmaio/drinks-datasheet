import React, { useState } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";

interface DrinkCreationContextProps {
  _id: string;
  setId: (id: string) => void;
  ingredients: IIngredient[];
  setIngredients: (ingredients: IIngredient[]) => void;
  name: string;
  setName: (name: string) => void;
  steps: string[];
  setSteps: (steps: string[]) => void;
  garnish: string;
  setGarnish: (garnish: string) => void;
  glassware: string;
  setGlassware: (glassware: string) => void;
  sellPrice: number;
  setSellPrice: (precoVenda: number) => void;
  confectionCost: number;
  setConfectionCost: (totalCost: number) => void;
  costPercentage: number;
  setCostPercentage: (totalCost: number) => void;
  image: string;
  setImage: (image: string) => void;
}

export const DrinkCreationContext = React.createContext(
  {} as DrinkCreationContextProps
);

export const DrinkCreationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [_id, setId] = useState<string>('');
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [name, setName] = useState<string>("");
  const [steps, setSteps] = useState<string[]>([]);
  const [garnish, setGarnish] = useState<string>("");
  const [glassware, setGlassware] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [confectionCost, setConfectionCost] = useState<number>(0);
  const [costPercentage, setCostPercentage] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  return (
    <DrinkCreationContext.Provider
      value={{
        _id,
        setId,
        ingredients,
        setIngredients,
        name,
        setName,
        steps,
        setSteps,
        garnish,
        setGarnish,
        glassware,
        setGlassware,
        sellPrice,
        setSellPrice,
        confectionCost,
        setConfectionCost,
        costPercentage,
        setCostPercentage,
        image,
        setImage,
      }}
    >
      {children}
    </DrinkCreationContext.Provider>
  );
};
