import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';
import { useStepper } from '../useStepper';
import { useEffect } from 'react';
import { useDebounce } from '../useDebounce';

const addressSchema = z.object({
  street: z.string().min(1, 'Informe sua rua'),
  city: z.string().min(1, 'Informe sua cidade'),
  state: z.string().min(1, 'Informe seu estado'),
  zip: z.string().min(1, 'Informe seu CEP'),
});

const cardSchema = z.object({
  number: z.string().min(13, 'Número inválido'),
  name: z.string().min(1, 'Nome no cartão'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato MM/AA'),
  cvv: z.string().min(3).max(4, 'CVV inválido')
});

const schema = z.object({
  address: addressSchema,
  card: cardSchema,
  paymentMethod: z.enum(['credit_card', 'pix'])
}).refine(
  d => d.paymentMethod === 'credit_card' ? !!d.card : true, 
  {
    message: 'Dados do cartão são obrigatórios',
    path: 'card'
  }
);

type CheckoutForm = z.infer<typeof schema>;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, clearErrors, trigger, watch, formState: {errors} } = useForm<CheckoutForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      paymentMethod: 'credit_card',
      card: {
        number: '',
        name: '',
        expiry: '',
        cvv: ''
      }
    }
  });

  const { step, next, prev, isFirst, isLast } = useStepper(2);

  const payment = watch('paymentMethod');
  const cardNumber = watch('card.number');

  // const debounceCard = useDebounce(cardNumber, 500);

  async function nextStep() {
    const valid = await trigger(['address.city', 'address.street', 'address.state', 'address.zip']);
    if (valid) {
      next();
    }
  }

  async function submit(payload: CheckoutForm) {
    try {
      // const createdOrder = await createOrder(payload);
      // await sendOrderConfirmation(createdOrder.id);
      // mensagem de OK
    } catch {
      // mensagem de error
    }

    // navigate('/store/order-success', { state: { order: createdOrder.id } });
  }

  return (
    <div className="card max-w-xl max-auto">
      <div className="card-header">
        <h2 className="cart-title">
          Checkout
        </h2>
      </div>
      <div className="card-body">
        <form className="space-y-4" onSubmit={handleSubmit(submit)}>
          {step === 0 && (
            <>
              <div>
                <label className="label">
                  Rua
                </label>
                <input type="text" className="input" {...register('address.street')} />
                {errors.address?.street && (
                  <p className="text-sm text-red-600 mt-1">{errors.address.street.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    Cidade
                  </label>
                  <input type="text" className="input" {...register('address.city')} />
                  {errors.address?.city && (
                    <p className="text-sm text-red-600 mt-1">{errors.address.city.message}</p>
                  )}
                </div>
                <div>
                  <label className="label">
                    Estado
                  </label>
                  <input type="text" className="input" {...register('address.state')} />
                  {errors.address?.state && (
                    <p className="text-sm text-red-600 mt-1">{errors.address.state.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="label">
                  CEP
                </label>
                <input type="text" className="input" {...register('address.zip')} />
                {errors.address?.zip && (
                  <p className="text-sm text-red-600 mt-1">{errors.address.zip.message}</p>
                )}
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div>
                <label className="label">Método de Pagamento</label>
                <select className="select" {...register('paymentMethod')}>
                  <option value="credit_card">Cartão de crédito</option>
                  <option value="pix">Pix</option>
                </select>
              </div>
              {payment==='credit_card' && (
                <>
                  <div>
                    <label className="label">Número do cartão</label>
                    <input className="input" {...register('card.number')} />
                    {errors.card?.number && <p className="text-sm text-red-600 mt-1">{errors.card.number.message}</p>}
                  </div>
                  <div>
                    <label className="label">Nome no cartão</label>
                    <input className="input" {...register('card.name')} />
                    {errors.card?.name && <p className="text-sm text-red-600 mt-1">{errors.card.name.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Validade (MM/AA)</label>
                      <input className="input" placeholder="MM/AA" {...register('card.expiry')} />
                      {errors.card?.expiry && <p className="text-sm text-red-600 mt-1">{errors.card.expiry.message}</p>}
                    </div>
                    <div>
                      <label className="label">CVV</label>
                      <input className="input" {...register('card.cvv')} />
                      {errors.card?.cvv && <p className="text-sm text-red-600 mt-1">{errors.card.cvv.message}</p>}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
          <div className="flex justify-between pt-4">
            {!isFirst && (
              <button type="button" className="btn" onClick={prev}>Voltar</button>
            )}
            {isLast ? (
              <button className="btn btn-primary" type="submit">Finalizar</button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={nextStep}>Próximo</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}