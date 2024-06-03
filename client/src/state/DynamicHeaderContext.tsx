import React, { useState } from "react";
import { IHeader } from "shared/interfaces/IHeader";
import drinkLogo from "assets/images/drink-logo.png";

interface DynamicHeaderContextProps {
  headerData: IHeader;
  setHeaderData: (header: IHeader) => void
 
}

export const DynamicHeaderContext = React.createContext(
  {} as DynamicHeaderContextProps
);

const defaultHeader: IHeader = {
  collectionId: 0,
  collectionName: "DRINKS DATASHEET APP",
  collectionImage: drinkLogo,
};

export const DynamicHeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [headerData, setHeaderData] = useState<IHeader>(defaultHeader);

  return (
    <DynamicHeaderContext.Provider
      value={{
        headerData,
        setHeaderData,
      }}
    >
      {children}
    </DynamicHeaderContext.Provider>
  );
};
