import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }
  componentDidMount() {
    console.log('Componente contador foi montado');
  }
  componentDidUpdate() {
    console.log('Componente atualizado');
  }
  componentWillUnmount() {
    console.log('Componente desmontado');
  }
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;