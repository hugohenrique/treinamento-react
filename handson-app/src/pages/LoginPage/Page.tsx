import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-2'>StoreApp</h1>
          <p className='text-gray-600'>Faça seu login para continuar</p>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
}
