import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. primeiro definir o schema zod
const schema = z.object({
    nome: z.string().min(3, 'deve ter pelo menos 3 caracteres'),
    idade: z.number().min(18, 'precisa ser maior que 18 anos')
});

// 2. criar o component form e em seguida conectar hook com zod
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (payload) => {
        console.log(payload);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome<br/>
                <input type="text" {...register('nome')} />
                {errors.nome && (<p style={{ color: 'red' }}>
                    {<span>{errors.nome.message}</span>}
                </p>)}
            </label>
            <br/>
            <label>
                Idade<br/>
                <input type="number" {...register('idade', { valueAsNumber: true })} />
                {errors.idade && (<p style={{ color: 'red' }}>
                    {<span>{errors.idade.message}</span>}
                </p>)}
            </label>
            <br/>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Form;