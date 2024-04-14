import styles from "./Input.module.css";
import "./Input.module.css";
import setLabelDecorationWhenInputHasValue from "./setLabelDecorationWhenInputHasValue";

interface InputProps {
  onChange: (value: string) => void;
  id: string;
  labelText: string;
  value: string;
  className?: string;
  type?: string;
  datalist?: string;
  required?: boolean;
  maxLenght?: number;
}

export default function Input({
  id,
  labelText,
  className,
  value,
  onChange, 
  datalist,
  required = false,
  maxLenght = 30,
  type = "text",
}: InputProps) {

  let labelClass = setLabelDecorationWhenInputHasValue(value);

  return (
    <b className={`${styles.label_relative} ${className}`}>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        list={datalist}
        required={required}
        maxLength={maxLenght}
      />
      <label className={labelClass} htmlFor={id}>
        {labelText}
      </label>
    </b>
  );
}
