import { httpDatasheets } from "httpApi";
import { useContext } from "react";
import { CollectionsContext } from "state/CollectionContext";

export function useGetCollections() {
  const { setCollectionsList } = useContext(CollectionsContext);

  return () => {
    httpDatasheets
      .get("collections")
      .then((res) => JSON.parse(res.request.response))
      .then((collections) => {
        setCollectionsList(collections);
      });
  };
}
