import React, { useState } from 'react';

const UserForm = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.length < 3) {
      alert('Nome deve ter pelo menos 3 caracteres');
      return;
    }
    if (idade < 18) {
      alert('Idade deve ser maior ou igual a 18');
      return;
    }
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  };

  return (
    <div>
      <h4>Formulário de cadastro de usuário</h4>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <label>
          Nome<br/>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br/>
        <label>
          Idade<br/>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </label>
        <br/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default UserForm;