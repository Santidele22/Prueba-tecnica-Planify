import { services } from "../data/services";
import { SelectedButton } from "./Botton_Selected";
import "../styles/card/card.css"
import { useState } from "react";


interface cardCategoryProps {
    updateProgress: string;
    updateTitle: string;
}


export const Card_Category: React.FC<cardCategoryProps> = () => {


    const categories = [...new Set(services.services.map(service => service.category))];
    //Ordeno los servicios por categorio
    const servicesByCategories = categories.map(category => ({
        category: category,
        services: services.services.filter(service => service.category === category)
    }));

  

    return (
        <article className="card_container">
            <h3 className="card_title">Categorias</h3>
            <section className="card_details">
                {servicesByCategories.map(service => (
                    <details key={service.category}>
                        <summary>
                            {service.category}
                        </summary>
                        <div >
                            {service.services.map(service => (
                                <div key={service.id} className="details_info">
                                    <p>{service.name}</p>
                                    <p>{service.description}</p>
                                    <SelectedButton
                                       isSelected={false}
                                       handleClick={() => ""}
                                    />
                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </section>
        </article>
    )
}
