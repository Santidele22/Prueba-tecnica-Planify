import "../styles/header/header.css";
import { Progress } from "./Progress";
import { ProgressProps } from "../interfaces/interfaces";
const Header: React.FC<ProgressProps> = ({ title, value }) => {
    return (
        <header className="header_container">
           <Progress title={title} value={value}/>
        </header>
    );
};
export default Header;
