import { useState } from "react";
import "./App.css";

function App() {
  const [cep, setCep] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Digite o CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <ul>
          <li>CEP: {cep}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
