import React, { useState } from 'react';

function BotaoContador() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Cliquei {count} vezes
        </button>
    );
}

export default BotaoContador;