import { useState } from "react"
import { slots } from "../data/slots"
import "../styles/cards/card_schedule.css"
export const Card_Schedules = () => {
  // Estado para almacenar las selecciones de las ranuras de tiempo
  const [isActive, setIsActive] = useState<boolean>(false);
  const isActiveClass = isActive ? 'active' : ''
    return (
        <article className="card_schedule">
            <h3>Seleccionar horarios</h3>
            <span>{slots.date}</span>
            <section className="schedules_container">
                {slots.availableTimeslots.map(time => (
                    <span className={`schedule_box  ${isActiveClass}`} onClick={() => {}}>
                        {time}
                    </span>
                ))}
            </section>
        </article>
    )
}