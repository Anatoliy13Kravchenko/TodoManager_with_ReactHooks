import { useState } from "react";

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (val:string) => setValue(val),
    onReset: () => setValue("")
  };
};
