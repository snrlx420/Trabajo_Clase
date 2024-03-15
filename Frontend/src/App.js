import {useState} from 'react';
import logo from './sonic.gif';
import './App.css';
import PrimerFormulario from './componentes/PrimerFormulario';

function App() {
  const [personaNombre, setPersona] = useState("DarthVader");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerFormulario
          personaNombre={personaNombre}
        />

      </header>
    </div>
  );
}

export default App;
