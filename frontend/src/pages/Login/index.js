
import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({history}){
    const [email, setEmail] = useState('');
    async function handleSubmit(event){
    event.preventDefault(); //evita troca de pagina

    const response = await api.post('/sessions', {email});

    const {_id} = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');

    //console.log(response);
    }
    return (
        <> 
            <p>
                Ofereça spots para programadores e encontre talentos para 
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email *</label>
                <input 
                id="email" 
                type="email" 
                placeholder="Seu email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <button type="submit" className="btn">Entrar</button>
            </form>
        </> 
    );
}