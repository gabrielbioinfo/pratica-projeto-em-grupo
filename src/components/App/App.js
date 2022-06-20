import './App.css';
import SideMenu from '../SideMenu/SideMenu';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>VinteFlix</h1>
      </header>
      <main className="content-wrapper">
        <SideMenu />
      </main>
    </div>
  );
}

export default App;
