import { useState } from "react";
import "./App.css";

function App() {
  const [endereco, setEndereco] = useState({});

  const manipularEndereco = (evento) => {
    setEndereco({ cep: evento.target.value });

    if(endereco.cep && endereco.cep.length === 8){
      // obter o CEP da API
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Digite o CEP" onChange={manipularEndereco} />
        <ul>
          <li>CEP: {endereco.cep}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
