//hooks
import { useEffect, useState } from "react";
//components
import { SelectedButton } from "./Botton_Selected";
//style
import "../styles/cards/card_category.css"
//functions
import { orderByCategories } from "../utils/orderCategories";
//interfaces
import { servicesInterfaces } from "../interfaces/interfaces";
export const Card_Category = () => {
    const [categories,setCategories] = useState<Array<servicesInterfaces>>()

    useEffect(() => {
        const orderedCategories = orderByCategories();
        setCategories(orderedCategories);
    },[])

    return (
        <article className="card_container">
            <h3 className="card_title">Categorias</h3>
            <section className="card_details">
                {categories?.map(service => (
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
