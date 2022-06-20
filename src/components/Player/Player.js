import { useContext } from "react"
import { VinteFlixContext } from "../../context/VinteflixContextProvider"

import "./Player.css";

export default function Player() {
  const {selectedResource} = useContext(VinteFlixContext);

  if(!selectedResource)
    return '';

  const {title, trybe, day} = selectedResource;

  return (
    <div className="Player">
      <h2>{title}</h2>
      <p>Tribo: {trybe}</p>
      <p>Ano de lançamento: {day}</p>
    </div>
  );
}