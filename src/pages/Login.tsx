import LoginForm from '../components/login/LoginForm';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
