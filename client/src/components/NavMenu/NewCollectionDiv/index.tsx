import { useContext, useState } from "react";
import navStyles from "../NavMenu.module.css";
import { CollectionsContext } from "state/CollectionContext";
import collectionBuilder from "shared/builders/collectionBuilder";
import { httpDatasheets } from "httpApi";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material/";
import CollectionInfosInputs from "components/CollectionInfosInputs";

export default function NewCollectionDiv() {
  const collectionsContext = useContext(CollectionsContext);

  const [open, openChange] = useState(false);

  const handleOpenPopup = () => {
    openChange(true);
  };
  const handleClosePopup = () => {
    openChange(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const collection = collectionBuilder(collectionsContext, []);

    httpDatasheets.post("collections", collection).then(() => {
      alert("collection created");
    });
  };

  return (
    <div>
      <span onClick={handleOpenPopup} className={navStyles.link}>
        New Collection
      </span>
      <Dialog open={open}>
        <DialogTitle> Create a new Collection </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <CollectionInfosInputs />
          </DialogContentText>
          <DialogActions>
            <form onSubmit={handleSubmit}>
              <Button type="submit" color="success" variant="contained">
                submit
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={handleClosePopup}
              >
                close
              </Button>
            </form>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
