import { Link, useLocation } from "react-router-dom"
import { linksProps } from "../interfaces/interfaces"
import "../styles/links/nextLinks.css"
export const NextLinksSection: React.FC<linksProps> = ({ nextRoute, lastRoute, nextText, lastText, isDisable }) => {
    const disableClass = isDisable ? "disable" : ""
    const location = useLocation()
    return (
        <section className="nextLinkSection">
            {
                location.pathname === "/" ?
                    <>
                        <Link to={lastRoute} className={`link ${disableClass}`}>{lastText}</Link>
                        <Link to={nextRoute} className={`link`}>{nextText}</Link>
                    </>
                    :
                    <>
                        <Link to={lastRoute} className={`link`}>{lastText}</Link>
                        <Link to={nextRoute} className={`link ${disableClass}`}>{nextText}</Link>
                    </>
            }
        </section>
    )
}