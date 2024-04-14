
function validateInputIsFilled(...inputs: string[]) {
  inputs.forEach((input) => {
    if (!input) {
      alert("Something is missing in the ingredient!");
      throw Error;
    }
  });
}

export default validateInputIsFilled;
