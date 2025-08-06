import z from 'zod';

const toDate = (value) => {
    if (typeof value === 'string' && value !== '') {
        return new Date(value);
    }
    return undefined;
};

const schema = z.object({
    nome: z.string().min(3, 'deve ter pelo menos 3 caracteres'),
    email: z.email({ error: 'você deve infromar um email válido' }),
    dataInicio: z.preprocess(
        toDate,
        z.date({
            invalid_type_error: 'Data inválida',
            required_error: 'Data inicial deve ser preenchida'
        })
    ),
    dataFim: z.preprocess(
        toDate,
        z.date({
            invalid_type_error: 'Data inválida',
            required_error: 'Data final deve ser preenchida'
        })
    )
})
    .refine(
        payload => payload.dataFim >= payload.dataInicio,
        {
            message: 'A data final deve ser maior ou igual a data inicial',
            path: ['dataFim']
        }
    );

export default schema;