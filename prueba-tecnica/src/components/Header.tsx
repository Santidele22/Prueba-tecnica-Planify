import "../styles/header/header.css";

interface HeaderProps {
    title: string;
    value: string;
}

const Header: React.FC<HeaderProps> = ({ title, value }) => {
    return (
        <header className="header_container">
            <label htmlFor="progress" className="header_label">{title}</label>
            <progress id="progress" max="3" value={value} className="header_progress">
              {value}
            </progress>
        </header>
    );
};
export default Header;
