export default function Saudacao({ nome }) {
    return <h2>Olá, {nome ? nome : 'visitante'}</h2>;
}
