import { useLocation } from "react-router"
import "../styles/footer/footer.css"
export const Footer = () => {

    const location = useLocation()
    const activeClass = location.pathname !== "/misTurnos" ? "active" : ""
    return (
        <footer className="footer">
            <div className="footer_info">
                <figure>
                <img src="./icons/coffe.svg" alt="coffe svg" />
                <figcaption className={`${activeClass}`}>Reservar</figcaption>

                </figure>
            </div>
            <div className="footer_info">
            <figure>
                <img src="./icons/coffe.svg" alt="coffe svg" />
                <figcaption>Mis turnos</figcaption>
                </figure>
            </div>

        </footer>
    )
}