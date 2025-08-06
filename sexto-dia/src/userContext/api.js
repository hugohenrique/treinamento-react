export async function getUsers() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!resposta.ok) {
        throw new Error('Erro ao consultar os usuários');
    }
    return await resposta.json();
}
