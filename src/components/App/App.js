import { useContext, useEffect, useState } from 'react';
import { VinteFlixContext } from '../../context/VinteflixContextProvider';
import getVinteFlixData from '../../data/service';
import Player from '../Player/Player';
import SideMenu from '../SideMenu/SideMenu';
import './App.css';

function App() {
  const {loading} = useContext(VinteFlixContext);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>VinteFlix</h1>
        {loading && <p>loading</p>}
      </header>
      <main className="content-wrapper">
        <SideMenu />
        <Player />
      </main>
    </div>
  );
}

export default App;
