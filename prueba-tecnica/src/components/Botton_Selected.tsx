import { useState } from "react";

export default function SelectedButton() {
    const [selected, setSelected] = useState(false);
  
    const handleClick = () => {
        setSelected(!selected);
    };
  
    return (
      <button onClick={handleClick} className={`btn ${selected ? "selected" : ""}`}>
        {selected ? 'Seleccionado' : 'Seleccionar'}
      </button>
    );
  }