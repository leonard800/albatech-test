import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password,
      });
      navigate('/profile', { state: { token: res.data.token } });
    } catch {
      setError('Sorry, we cannot log you in, please try again!');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label>Email</label>
        <input
          type="text"
          value="eve.holt@reqres.in"
          disabled
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
