//hooks
import { useEffect, useState } from "react";
//components
import { SelectedButton } from "./Botton_Selected";
//style
import "../styles/cards/card_category.css"
//functions
import { orderByCategories } from "../utils/orderCategories";
import { Toaster } from 'react-hot-toast';
//interfaces
import { servicesInterfaces } from "../interfaces/interfaces";
import { CategoryListProps } from "../interfaces/interfaces";
import { servicesSelected } from "../interfaces/interfaces";
import { handleSelection } from "../utils/selectedServices";
import { NextLinksSection } from "./nextLinksSection";

export const Card_Category: React.FC<CategoryListProps> = ({ updateCategories }) => {
    //Contiene todas los servicios ordenado por categorias 
    const [categories, setCategories] = useState<Array<servicesInterfaces>>()
    //Contiene solo los servicios seleccionados
    const [selectedServices, setSelectedServices] = useState<Array<servicesSelected>>([]);
    //hooks para ordenar por categoria
    useEffect(() => {
        const orderedCategories = orderByCategories();
        setCategories(orderedCategories);
    }, [])

    useEffect(() => {
        updateCategories(selectedServices);
    }, [selectedServices, updateCategories]);


    const compareById = (a: any, b: any) => a.id === b.id;
    //funcion para almacenar solo las categorias que fueron seleccionadas
    const handleSelectService = (selectedService: servicesSelected) => {
        handleSelection(selectedService, selectedServices, setSelectedServices, "Solo se puede elegir un servicio", compareById);
    };

    return (
        <>
            <article className="card_container">
                <h3 className="card_title">Categorias</h3>
                <section className="card_details">
                    {categories?.map(service => (
                        <details key={service.category}>
                            <summary>
                                {service.category}
                            </summary>
                            <div >
                                {service.services.map(service => {
                                    const isSelected = selectedServices.some(selected => selected.id === service.id);
                                    return (
                                        <div key={service.id} className="details_info">
                                            <p>{service.name}</p>
                                            <p>{service.description}</p>

                                            <SelectedButton
                                                isSelected={isSelected}
                                                handleClick={() => handleSelectService(service)}
                                            >
                                                {isSelected ? "Seleccionado" : "Seleccionar servicio"}
                                            </SelectedButton>

                                        </div>
                                    );
                                })}
                            </div>
                        </details>
                    ))}
                </section>
                <Toaster />
            </article>
            {
                selectedServices.length > 0 ?
                    <NextLinksSection nextRoute="/schedules" lastRoute="" nextText="Siguiente" lastText="Anterior" isDisable={true}  handleClick={() => null}/>
                    : ""
            }
        </>
    )
}
