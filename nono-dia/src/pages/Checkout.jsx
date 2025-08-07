import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    nome: z.string().min(3),
    email: z.string().email(),
    endereco: z.string().min(5)
  });
  

export default function Checkout() {
    const itens = useSelector(state => state.carrinho.itens);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = (data) => {
        console.log('Pedido realizado:', { cliente: data, produtos: itens });
        alert('Pedido realizado com sucesso!');
    };
    return (
        <div>
            <h4>Finalizar Compra</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nome
                    <br/>
                    <input type="text" {...register('nome')} />
                </label>
                <p>
                    <label>
                        Email
                        <br/>
                        <input type="email" {...register('email')} />
                    </label>
                </p>
                <label>
                    Endereço
                    <br/>
                    <input type="text" {...register('endereco')} />
                </label>
                <p>
                    <button type="submit">Cadastrar</button>
                </p>
            </form>
        </div>
    );
}