import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef) {
      alert(`Nuevo Producto: ${inputRef.current?.value}`);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto. Ej: Manzana"
      />
      <button onClick={handleSubmit}>Anadir al carrito</button>
    </div>
  );
};
