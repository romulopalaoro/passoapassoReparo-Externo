import './App.css';
import Steps from './components/Steps';
import Fornecedores from './components/fornecedores';

let escolha
escolha = "pedido"

function App() {
  return (
    <div className="App">
      
      <header className='header'>
        <h1>Passo-a-passo das etapas do Serviço Externo</h1>
      </header>
        
          <nav className='container'>
            <button >Envio para Reparo</button>
            <button >Fornecedores</button>
            <button >Pedido de material e serviço</button> 
        </nav>
        {escolha === "pedido" ?
        <Steps />
        :
        <Fornecedores></Fornecedores>
        
      }
    </div>
  );
}

export default App;
