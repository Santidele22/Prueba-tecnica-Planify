import "../styles/header/header.css";
import { Progress } from "./Progress";
import { ProgressProps } from "../interfaces/interfaces";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
const Header: React.FC<ProgressProps> = ({ title, value }) => {
    const [isActive, setIsActive] = useState<Boolean>(true)

    const location = useLocation()
    useEffect(() => {
        if (location.pathname === "/myturns") {
            setIsActive(false)
        }else{
            setIsActive(true)
        }
    }, [location.pathname])
    return (
        <header className="header_container">
            {
                isActive ?
                    <Progress title={title} value={value} />
                    :
                    <>
                        <h1>Mis turnos</h1>
                    </>
            }
        </header>
    );
};
export default Header;
