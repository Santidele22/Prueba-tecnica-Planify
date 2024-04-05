import { useLocation } from "react-router"
import "../styles/footer/footer.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
export const Footer = () => {
    const [reserveLink, setReserveLink] = useState<Boolean>(false)
    const [turnLink, setTurnLink] = useState<Boolean>(false)

    const location = useLocation()
    // Lógica para establecer las clases activas
      // Lógica para establecer las clases activas
      useEffect(() => {
        if (location.pathname !== "/myturns") {
            setReserveLink(true);
            setTurnLink(false);
        } else if (location.pathname === "/myturns") {
            setReserveLink(false);
            setTurnLink(true);
        }
    }, [location.pathname]);
    return (
        <footer className="footer">
            <div className="footer_info">
                <figure>
                    <img src="./icons/coffe.svg" alt="coffe svg" />
                    <Link to={"/"} className={reserveLink ? "link_active" : ""}>Reservar</Link>
                </figure>
            </div>
            <div className="footer_info">
                <figure>
                    <img src="./icons/coffe.svg" alt="coffe svg" />
                    <Link to="/myturns" className={turnLink ? "link_active" : ""}>Mis turnos</Link>
                </figure>
            </div>

        </footer>
    )
}