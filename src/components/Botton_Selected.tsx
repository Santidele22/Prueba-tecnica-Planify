import { selectedButtonProps } from "../interfaces/interfaces";
export const SelectedButton: React.FC<selectedButtonProps> = ({ isSelected, handleClick, children}) =>  {
  return (
      <button onClick={handleClick} className={`btn ${isSelected ? "selected" : ""}`}>
         {children}
      </button>
  );
}