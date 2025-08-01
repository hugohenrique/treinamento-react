import { useState } from 'react';
import './App.css';
import BotaoPrimario from './components/BotaoPrimario';
import Card from './components/Card';
import Painel from './components/Painel';
import Botao from './components/Botao';
import Input from './components/Input';
import CardSombreado from './components/CardSombreado';

function App() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <>
      <div>
        <h3>Quarto dia</h3>
        <Card>
          <BotaoPrimario>Avançar para construir apps mais bonitos 1</BotaoPrimario>
        </Card>
        <br/>
        <Painel>
          <div>
            <Botao onClick={handleClick} loading={loading}>
              {loading ? 'Carregando um novo relatório' : 'Gere um novo relatório'}
            </Botao>
          </div>
          <div>
            <Input placeholder="Escreve aqui sua mensagem" type="text" />
          </div>
          <CardSombreado>
            Mensagem:<br/><Input placeholder="Escreve aqui sua mensagem" type="text" />
            <br/>
            Telefone:<br/><Input placeholder="Escreve aqui sua telefone" type="text" />
          </CardSombreado>
        </Painel>
      </div>
    </>
  )
}

export default App
