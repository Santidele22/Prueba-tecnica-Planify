import "../styles/card/card.css"
import { services } from "../data/services"
const category = services.services.filter(category => category.category)

export default function Card() {
    return (
        <article className="card_container">
            <h3 className="card_title">Categorias</h3>
            <section className="card_details">
                {services.services.map(service => (
                <details>
                    <summary>{service.category}</summary>
                    <span>{service.name}</span>
                    <p>{service.description}</p>
                    <button>Seleccionar servicio</button>
                </details>
                ))}
              
            </section>
        </article>
    )
}