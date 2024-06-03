import InputFile from "components/InputFile";
import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import styles from "./CollectionInfosInputs.module.scss";
import { CollectionsContext } from "state/CollectionContext";

export default function NewCollectionInputs() {
  const { setName, setDescription, setImage } = useContext(CollectionsContext);

  return (
    <>
      <Stack direction={"column"} spacing={2}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          className={styles.input}
          inputProps={{maxLenght:20}}
          required
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          variant="standard"
          inputProps={{maxLenght:80}}
          className={styles.input}
          onChange={(event) => setDescription(event.target.value)}
        />
        <InputFile
          setImage={setImage}
          labelStyle={styles.fileSelectionArea}
          imageStyle={styles.image}
        />
      </Stack>
    </>
  );
}
