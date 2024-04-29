import InputFile from "components/InputFile";
import { Input, InputLabel } from "@mui/material";
import { useContext } from "react";
import styles from "./CollectionInfosInputs.module.scss";
import { CollectionsContext } from "state/CollectionContext";

export default function CollectionInfosInputs() {
  const { setName, setDescription, setImage } = useContext(CollectionsContext);

  return (
    <>
      <Input
        id="name"
        className={styles.input}
        onChange={(event) => setName(event.target.value)}
      />
      <InputLabel>Name</InputLabel>
      <Input
        id="description"
        className={styles.input}
        onChange={(event) => setDescription(event.target.value)}
      />
      <InputLabel>Description</InputLabel>
      <InputFile
        setImage={setImage}
        labelStyle={styles.fileSelectionArea}
        imageStyle={styles.image}
      />
    </>
  );
}
