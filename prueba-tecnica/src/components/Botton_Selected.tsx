interface selectedButtonProps {
  isSelected: boolean
  handleClick: () => void
}

export const SelectedButton: React.FC<selectedButtonProps> = ({ isSelected, handleClick }) =>  {
  return (
      <button onClick={handleClick} className={`btn ${isSelected ? "selected" : ""}`}>
          {isSelected ? 'Seleccionado' : 'Seleccionar'}
      </button>
  );
}