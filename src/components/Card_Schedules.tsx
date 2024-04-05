
import { useEffect, useState } from "react"
//data
import { slots } from "../data/slots"
//functions
import toast, { Toaster } from 'react-hot-toast';
//styles
import "../styles/cards/card_schedule.css"
//Interface
import { SchedulesListProps, SlotSelected, SlotInterfaces } from "../interfaces/interfaces"
import { SelectedButton } from "./Botton_Selected"
import { NextLinksSection } from "./nextLinksSection";

export const Card_Schedules: React.FC<SchedulesListProps> = ({ updatedSchedules }) => {
    // Estado para almacenar las selecciones de las ranuras de tiempo
    const [schedules, setSchedules] = useState<SlotInterfaces | null>(null);
    const [selectedSchedules, setSelectedSchedules] = useState<Array<SlotSelected>>([]);

    useEffect(() => {
        // Simulando carga de datos de slots
        setSchedules(slots);
    }, []);


    useEffect(() => {
        updatedSchedules(selectedSchedules);
    }, [selectedSchedules, updatedSchedules]);

    // Función para manejar la selección y deselección de horarios
    function handleSelectSchedule(selectedTime: string) {
        const index = selectedSchedules.findIndex(schedule => schedule.availableTimeslots === selectedTime);
        if (index === -1) {
            if (selectedSchedules.length >= 1) {
                toast.error("Solo se puede elegir un horario", {
                    duration: 2000 // Duración en milisegundos (en este caso, 3 segundos)
                });

            } else {
                setSelectedSchedules(prevSelectedSchedules => [
                    ...prevSelectedSchedules,
                    {
                        date: schedules?.date || "",
                        serviceId: schedules?.serviceId || 0,
                        availableTimeslots: selectedTime
                    }
                ]);
            }

        } else {
            setSelectedSchedules(prevSelectedSchedules => {
                const updatedSchedules = [...prevSelectedSchedules];
                updatedSchedules.splice(index, 1);
                return updatedSchedules;
            });
        }
    }



    return (
        <>
            <article className="card_schedule">
                <h3>Seleccionar horarios</h3>
                <span>{schedules?.date}</span>
                <section className="schedules_container">
                    {schedules?.availableTimeslots.map((time) => (
                        <SelectedButton
                            isSelected={selectedSchedules.some(schedule => schedule.availableTimeslots === time)}
                            handleClick={() => handleSelectSchedule(time)}
                        >
                            {time}
                        </SelectedButton>
                    ))}
                </section>
                <Toaster />
            </article>
            {
                selectedSchedules.length > 0 ?
                    <NextLinksSection nextRoute="/confirmation" lastRoute="/" lastText="Anterior" nextText="Siguiente" isDisable={false} handleClick={() => null}/>
                    :
                    <NextLinksSection nextRoute="" lastRoute="/" lastText="Anterior" nextText="Siguiente" isDisable={true} handleClick={() => null}/>
            }
        </>
    )
}
