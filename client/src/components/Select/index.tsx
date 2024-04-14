import { useState } from "react";

interface SelectProps<T extends { _id: string; name: string }> {
  arr: T[];
  onChangeHandler: (value: string) => void,
  className?: string,
  defaultOption?: string
}

export default function Select<T extends { _id: string; name: string }>({
  arr,
  onChangeHandler,
  className,
  defaultOption = "select an item"
}: SelectProps<T>) {

  const [selected, setSelected] = useState("");

  return (
      <select 
        onChange={(e) => {
          setSelected(e.target.value)
          onChangeHandler(e.target.value)
        }}
        value={selected}
        className={className}
      >
        <option>{defaultOption}</option>
        {arr.map((item) => (
          <option key={item._id} value={item._id} >{item.name}</option>
        ))}
      </select>
  );
}
