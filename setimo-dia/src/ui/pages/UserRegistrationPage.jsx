import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from '../components/InputText';
import userSchema from '../../core/user/entities/UserSchema';

export default function UserRegistrationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(userSchema) });

    const onSubmit = (payload) => {
        console.info('ENVIOU O FORMULÁRIO');
        console.log(payload);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText
                fieldLabel="Nome"
                className="form-control"
                type="text"
                {...register('nome')}
                errors={errors}
            />
            <InputText
                fieldLabel="Email"
                className="form-control"
                type="email"
                {...register('email')}
                errors={errors}
            />
            <InputText
                fieldLabel="Data início"
                className="form-control"
                type="date"
                {...register('dataInicio')}
                errors={errors}
            />
            <InputText
                fieldLabel="Data fim"
                className="form-control"
                type="date"
                {...register('dataFim')}
                errors={errors}
            />
            <p>
                <button className="submit" type="submit">Cadastrar</button>
            </p>
        </form>
    );
}