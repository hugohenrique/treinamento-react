import './App.css';
import BotaoCustomizado from './components/BotaoCustomizado';
import BotaoPrimario from './components/BotaoPrimario';
import Card from './components/Card';

function App() {
  return (
    <>
      <div>
        <h5>Quarto dia</h5>
        <Card>
          <BotaoPrimario>Avançar para construir apps mais bonitos 1</BotaoPrimario>
          <br/>
          <br/>
          <button className="botao-primario">Avançar para construir apps mais bonitos 2</button>
          <br/>
          <textarea>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).</textarea>
          <br/>
          <BotaoCustomizado />
        </Card>
      </div>
    </>
  )
}

export default App
