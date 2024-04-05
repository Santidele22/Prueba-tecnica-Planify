import React from "react";
import { SelectedData, servicesSelected, SlotSelected } from "../interfaces/interfaces";
import "../styles/cards/myturns.css";

interface MyTurnsProps {
  service: Array<SelectedData>;
}

export const MyTurns: React.FC<MyTurnsProps> = ({ service }) => {
  return (
    <article className="myTurnsContainer">
      {service.length > 0 ? (
        service.map((turn, index) => (
          <div key={index}>
            <h3>Turno {index + 1}</h3>
            <p>Categorías seleccionadas:</p>
            <ul>
              {turn.categorySelected.map((category: servicesSelected, catIndex: number) => (
                <li key={catIndex}>{category.name}</li>
              ))}
            </ul>
            <p>Horarios seleccionados:</p>
            <ul>
              {turn.schedulesSelected.map((schedule: SlotSelected, schedIndex: number) => (
                <li key={schedIndex}>{schedule.date} a las {schedule.availableTimeslots}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No hay ningún turno agendado</p>
      )}
    </article>
  );
};
