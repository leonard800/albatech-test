import LoginForm from '../components/login/LoginForm';

export default function Login() {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10">
        <div className="hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back 👋</h2>
          <p className="text-gray-600">
            Masuk ke akun Anda untuk mengakses fitur.
          </p>
          <img src="/login-illustration.svg" className="w-80 mt-6" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow w-full">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
