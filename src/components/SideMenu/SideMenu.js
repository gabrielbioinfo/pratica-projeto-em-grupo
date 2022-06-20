import { useContext } from "react";
import { VinteFlixContext } from "../../context/VinteflixContextProvider";

import "./SideMenu.css";

export default function SideMenu(){
  const {resources, selectResource} = useContext(VinteFlixContext);
  return (
    <div className="SideBar">
      <ul>
        {
          resources.map( category => (
            <li key={category.id}>
              <span className='categoria'>{category.name}</span>
              {category.movies.map( movie => (
                <button key={movie.id}
                  onClick={() => selectResource(movie)} >
                    {`${movie.day} ${movie.trybe} ${movie.title}`}</button>
              ) )}
            </li>
          ))
        }
      </ul>
    </div>
  )
}