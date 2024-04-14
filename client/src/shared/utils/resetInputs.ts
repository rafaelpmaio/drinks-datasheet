export default function resetInputs(
  ...setInputs: React.Dispatch<React.SetStateAction<string>>[]
) {
  setInputs.forEach((setInput) => setInput(""));
}
