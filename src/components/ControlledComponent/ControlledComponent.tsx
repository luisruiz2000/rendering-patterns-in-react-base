import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ingresa el cidigo de cupon"
      />
      <p>Cupon de descuento: {value}</p>
    </div>
  );
};
