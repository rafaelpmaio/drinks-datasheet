import React, { useContext, useState } from "react";
import styles from "./StepsList.module.scss";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import { DrinkCreationContext } from "state/DrinkCreationContext";

export default function StepsList() {
  const [id, setId] = useState(0);
  const [stepInput, setStepInput] = useState("");

  const { steps, setSteps } = useContext(DrinkCreationContext);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSteps([...steps, stepInput]);
    setId(id + 1);
    setStepInput("");
  };

  return (
    <>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={styles.steps_list}>
            <b className={styles.step_prefix}>{`Step ${index + 1}:  `}</b>
            {step}
            <Button
              type="delete"
              onClick={(e) => {
                e.preventDefault();
                steps.splice(index, 1);
              }}
            >
              x
            </Button>
          </li>
        ))}
      </ul>
      <span className={pageStyles.input_button_align}>
        <Input
          id="step"
          labelText="Describe the step"
          value={stepInput}
          onChange={setStepInput}
          className={styles.input}
        />
        <Button onClick={handleClick}>+</Button>
      </span>
    </>
  );
}
