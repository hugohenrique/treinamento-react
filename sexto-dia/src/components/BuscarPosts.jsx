import React, { useState } from 'react';
import api from '../api';

export default function BuscarPosts() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');

    /*
    useEffect(() => {
        if (query.length > 2) {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const filtrados = data.filter(p => p.title.includes(query));
                setPosts(filtrados);
            });
        } else {
            setPosts([]);
        }
    }, []);
    */

    const search = async () => {
        if (query.length <= 2) {
            setPosts([]);
            return;
        }

        api.get('/posts').then(resposta => {
            const filtrados = resposta.data.filter(p => p.title.includes(query));
            setPosts(filtrados);
        });

        /*
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const filtrados = data.filter(p => p.title.includes(query));
                setPosts(filtrados);
            });
        */
    };

    return (
        <div>
            <div style={{ backgroundColor: '#ccc', padding: '10px', border: 'solid 1px #777' }}>
                <input style={{ padding: '10px 20px', height: 30, }} onChange={(e) => setQuery(e.target.value)} placeholder="Digite o que quer buscar..." />
                <button style={{ padding: '10px 20px', height: 40, lineHeight: 1 }} onClick={(e) => search(e)}>Pesquisar</button>
            </div>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}
