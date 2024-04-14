import { BsPencilSquare } from "react-icons/bs";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useContext, useState } from "react";
import styles from "./EditButtom.module.css";
import {  httpDatasheets } from "httpApi";
import { ICollection } from "shared/interfaces/ICollection";
import CollectionInfosInputs from "components/CollectionInfosInputs";
import { CollectionsContext } from "state/CollectionContext";

interface EditButtonProps {
  collection: ICollection;
}

export default function EditButton({ collection }: EditButtonProps) {
  const [open, openChange] = useState(false);
  const {name, description, image } = useContext(CollectionsContext)

  const handleOpenPopup = () => {
    openChange(true);
  };
  const handleClosePopup = () => {
    openChange(false);
  };
  const handleSubmit = () => {
    httpDatasheets.put(`collections/${collection._id}`, {
      name: name,
      description: description,
      image: image,
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenPopup}
        className={styles.editButton}
      >
        <BsPencilSquare />
      </button>
      <Dialog open={open}>
        <DialogTitle>Edit {collection.name} Collection</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <CollectionInfosInputs />
          </DialogContentText>
        </DialogContent>
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
      </Dialog>
    </div>
  );
}
