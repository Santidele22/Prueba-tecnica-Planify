import React from 'react';
import { NextLinksSection } from "./nextLinksSection";
import "../styles/cards/card_confirmation.css"
import { CardConfirmationInterface } from '../interfaces/interfaces';
export const Card_Confirmation: React.FC<CardConfirmationInterface> = ({ category, schedulesSelected, handleClick }) => {
  return (
    <>
    <article>
      <p>Servicio:{category.map(e => e.name)}</p>
      <p>Fecha: {schedulesSelected.map(e => (
        <>
          <span>{e.date}</span>
          <span>{e.availableTimeslots} </span>
        </>
      ))}</p>
    </article>
    <NextLinksSection lastText='Anterior' nextRoute='/myturns' lastRoute='/schedules'  nextText='Confirmar' isDisable={false}  handleClick={handleClick}/>
    </>
  );
};
