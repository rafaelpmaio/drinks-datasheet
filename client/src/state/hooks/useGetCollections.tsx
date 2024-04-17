import { httpDatasheets } from "httpApi";
import { useContext } from "react";
import { CollectionsContext } from "state/CollectionContext";
import collectionJson from "assets/collections.json";
import { ServerStatusContext } from "state/ServerSatusContext";

export function useGetCollections() {
  const { setCollectionsList } = useContext(CollectionsContext);
  const {setIsOnline} = useContext(ServerStatusContext);

  return () => {
    httpDatasheets
      .get("collections")
      .then((res) => JSON.parse(res.request.response))
      .then((collections) => {
        setCollectionsList(collections);
      })
      .catch(() => {
        // alert("Server is offline, but here is a demo so you can try the app!");
        setIsOnline(false)
        setCollectionsList(collectionJson);
      });
  };
}
