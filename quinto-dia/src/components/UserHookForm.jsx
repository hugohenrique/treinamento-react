import React from 'react';
import { useForm } from 'react-hook-form';

const UserHookForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (payload) => {
        if (payload.nome.length < 3) {
            alert('Nome deve ter pelo menos 3 caracteres');
        }
        return;
    };

    return (
        <div>
            <h4>Formulário usando a lib Hook Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nome<br/>
                    <input type="text" {...register('nome')} />
                </label>
                <br/>
                <label>
                    Idade<br/>
                    <input type="number" {...register('idade')} />
                </label>
                <br/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default UserHookForm;