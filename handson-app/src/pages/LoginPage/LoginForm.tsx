import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Você informar pelo menos 6 caracteres')
});

type LoginDataForm = z.infer<typeof schema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, isAuthenticated, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/store/cart');
    }
  }, [isAuthenticated]);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginDataForm>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (payload: LoginDataForm) => {
    clearError();
    await login(payload.email, payload.password);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold">Login</h2>
        </div>
        <div className="card-body">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="label">
                <input
                  className="input"
                  type="email"
                  placeholder="seu@email.com"
                  {...register('email')}
                />
              </label>
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="label">Senha</label>
              <div className="relative">
                <input
                  className="input pr-10"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  {...register('password')}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  'Entrar'
                )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}