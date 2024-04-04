//hooks
import { useEffect, useState } from "react";
//components
import { SelectedButton } from "./Botton_Selected";
//style
import "../styles/cards/card_category.css"
//functions
import { orderByCategories } from "../utils/orderCategories";
import toast, { Toaster } from 'react-hot-toast';
//interfaces
import { servicesInterfaces } from "../interfaces/interfaces";
import { CategoryListProps } from "../interfaces/interfaces";
import { servicesSelected } from "../interfaces/interfaces";

export const Card_Category: React.FC<CategoryListProps> = ({ updateCategories }) => {
    //Contiene todas los servicios ordenado por categorias 
    const [categories, setCategories] = useState<Array<servicesInterfaces>>()
    const [selectedServices, setSelectedServices] = useState<Array<servicesSelected>>([]);

    //hooks para ordenar por categoria
    useEffect(() => {
        const orderedCategories = orderByCategories();
        setCategories(orderedCategories);
    }, [])

    useEffect(() => {
        updateCategories(selectedServices);
    }, [selectedServices, updateCategories]);




    //funcion para almacenar solo las categorias que fueron seleccionadas
    function handleSelectService(selectedService: servicesSelected) {
        const index = selectedServices.findIndex(service => service.id === selectedService.id);
        if (index === -1) {
            // Si el servicio no está seleccionado, agregarlo
            if(selectedServices.length >= 1){
                toast.error("Solo se puede elegir un servicio", {
                    duration: 2000 // Duración en milisegundos (en este caso, 3 segundos)
                });
            }else{
                setSelectedServices(prevSelectedServices => [...prevSelectedServices, selectedService]);
            }
        } else {
            // Si el servicio está seleccionado, eliminarlo
            setSelectedServices(prevSelectedServices => {
                const updatedServices = [...prevSelectedServices];
                updatedServices.splice(index, 1);
                return updatedServices;
            });
        }
    }
    
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
                                        isSelected={selectedServices.some(selected => selected.id === service.id)}
                                        handleClick={() => handleSelectService(service)}
                                    >
                                         {selectedServices.some(selected => selected.id === service.id) ? "Seleccionado" : "Seleccionar servicio"}
                                    </SelectedButton>

                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </section>
            <Toaster/>
        </article>
    )
}
