import "../styles/header/header.css"
export default function Header (){
    return(
        <header className="header_container">
           <label htmlFor="progress" className="header_label">Seleccionar servicios</label>
            <progress id="progress"  max="3" value="1"   className="header_progress">
            70%
            </progress>
        </header>
    )
}